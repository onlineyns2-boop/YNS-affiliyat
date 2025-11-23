import React from 'react'

export default function ProductCard({product}){
  return (
    <div style={{border:'1px solid #ddd', borderRadius:8, padding:12}}>
      <div style={{height:140, background:'#f7f7f7', display:'flex', alignItems:'center', justifyContent:'center', marginBottom:8}}>
        <img src={product.image} alt={product.title} style={{maxHeight:'100%', maxWidth:'100%'}} />
      </div>
      <h3 style={{margin:'8px 0'}}>{product.title}</h3>
      <p style={{margin:'4px 0', color:'#666'}}>Price: ${product.price}</p>
      <a href={product.affiliate} target="_blank" rel="noreferrer" style={{display:'inline-block', marginTop:8, padding:'8px 12px', background:'#0366d6', color:'#fff', borderRadius:6, textDecoration:'none'}}>Buy with affiliate link</a>
    </div>
  )
}
