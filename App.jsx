import React from 'react'
import ProductCard from './components/ProductCard'

const sampleProducts = [
  { id: 1, title: 'Wireless Earbuds', price: '23.99', image: '/public/placeholder.png', affiliate: 'https://example.com/product/1?aff=YNS' },
  { id: 2, title: 'Phone Case', price: '9.99', image: '/public/placeholder.png', affiliate: 'https://example.com/product/2?aff=YNS' },
  { id: 3, title: 'Fast Charger', price: '12.50', image: '/public/placeholder.png', affiliate: 'https://example.com/product/3?aff=YNS' }
]

export default function App(){
  return (
    <div style={{fontFamily:'Arial, sans-serif', padding:24}}>
      <header style={{display:'flex', alignItems:'center', justifyContent:'space-between', marginBottom:24}}>
        <h1>YNS Affiliate Store</h1>
        <nav>
          <a href="#" style={{marginRight:12}}>Home</a>
          <a href="#" style={{marginRight:12}}>Deals</a>
          <a href="#">Contact</a>
        </nav>
      </header>

      <section style={{display:'grid', gridTemplateColumns:'repeat(auto-fit, minmax(220px, 1fr))', gap:16}}>
        {sampleProducts.map(p => <ProductCard key={p.id} product={p} />)}
      </section>

      <footer style={{marginTop:32, borderTop:'1px solid #eee', paddingTop:12}}>
        <small>Built for YNS Affiliate Store — replace product links and images with real data.</small>
      </footer>
    </div>
  )
}
