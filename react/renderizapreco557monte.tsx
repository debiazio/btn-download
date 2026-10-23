import React, { useEffect, useState } from 'react'
import styles from '../react/styles/ProductOdontoPriceMonte.module.css'

interface Installment {
  NumberOfInstallments: number
  Value: number
  PaymentSystemName?: string
  InterestRate?: number
}

interface Offer {
  Price: number
  ListPrice?: number
  Currency?: string
  AvailableQuantity?: number
  Installments?: Installment[]
}

interface Seller {
  commertialOffer?: Offer
}

interface Sku {
  sellers?: Seller[]
}

interface CatalogProduct {
  items?: Sku[]
}

interface ProductPriceData {
  price: number
  listPrice?: number
  currency: string
  installment?: Installment
}

const PRODUCT_ID = '557'

const Product563Price: StorefrontFunctionComponent = () => {
  const [data, setData] = useState<ProductPriceData | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    const controller = new AbortController()

    const loadProduct = async () => {
      try {
        const response = await fetch(
          `/api/catalog_system/pub/products/search/?fq=productId:${PRODUCT_ID}`,
          { signal: controller.signal }
        )

        if (!response.ok) {
          throw new Error('Não foi possível buscar o produto')
        }

        const products: CatalogProduct[] = await response.json()
        const product = products[0]
        const skus = product?.items ?? []

        const offers: Offer[] = []

        skus.forEach(sku => {
          ;(sku.sellers ?? []).forEach(seller => {
            const offer = seller.commertialOffer

            if (offer) {
              offers.push(offer)
            }
          })
        })

        const offer =
          offers.find(item => (item.AvailableQuantity ?? 0) > 0) ?? offers[0]

        if (!offer) {
          throw new Error('Produto sem oferta disponível')
        }

        const installments = [...(offer.Installments ?? [])].sort(
          (a, b) => b.NumberOfInstallments - a.NumberOfInstallments
        )

        setData({
          price: offer.Price,
          listPrice: offer.ListPrice,
          currency: offer.Currency || 'BRL',
          installment: installments[0],
        })
      } catch (err) {
        if (!controller.signal.aborted) {
          setError(true)
        }
      } finally {
        if (!controller.signal.aborted) {
          setLoading(false)
        }
      }
    }

    loadProduct()

    return () => controller.abort()
  }, [])

  if (loading) return null
  if (error || !data) return null

  const formatPrice = (value: number) =>
    new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: data.currency,
    }).format(value)

  return (
    <div className={styles.price}>
      {data.listPrice != null && data.listPrice > data.price && (
        <span className={styles.listPrice}>
          DE {formatPrice(data.listPrice)}
        </span>
      )}

      <span className={styles.sellingPrice}>
        POR {formatPrice(data.price)}
      </span>

      {data.installment && (
        <span className={styles.installments}>
          ou {data.installment.NumberOfInstallments}x de{' '}
          {formatPrice(data.installment.Value)}
          {data.installment.InterestRate === 0 ? ' sem juros' : ''}
        </span>
      )}
    </div>
  )
}

Product563Price.schema = {
  title: 'Preço do produto 557',
}

export default Product563Price
