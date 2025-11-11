const PRODUCTS = [
      {id:1,name:'Maní confitado (frutos rojos) 100g',type:'mani',price:1000,desc:'',image:'mani_conf_fr.jpg'},
      {id:2,name:'Almendras 100g',type:'almendras',price:2000,desc:'',image:'almendras.jpg'},
      {id:3,name:'Almendras 50g',type:'almendras',price:1000,desc:'',image:'almendras.jpg'},
      {id:4,name:'Maní salado 100g',type:'mani',price:1000,desc:'',image:'mani_salado.jpg'},
      {id:5,name:'Nueces 100g',type:'nuez',price:1000,desc:'',image:'nueces.jpg'},
      {id:6,name:'Semillas Mix 100g',type:'mix',price:1000,desc:'',image:'semillas_mix.jpg'},
      {id:7,name:'Maní confitado (tradicional) 100g',type:'mani',price:1000,desc:'',image:'mani_confitado_t.jpg'},
      {id:8,name:'Frutos Mix 100g',type:'mix',price:1000,desc:'',image:'frutos_mix.jpg'},
      {id:9,name:'Guagüitas 100g',type:'otros',price:1000,desc:'',image:'guaguitas.jpg'},
      {id:10,name:'Maní con cascara 100g',type:'mani',price:1000,desc:'',image:'mani_con_cascara.jpg'},
      {id:11,name:'Maní japones 100g',type:'mani',price:1000,desc:'',image:'mani_japones.jpg'},
      {id:12,name:'Pasas 100g',type:'otros',price:1500,desc:'',image:'pasas.jpg'},



    ];

    const productsEl = document.getElementById('products');
    const q = document.getElementById('q');
    const filterType = document.getElementById('filterType');
    const sortBy = document.getElementById('sortBy');

    function money(n){return '$' + n.toLocaleString('es-CL')}

    function renderProducts(list){
      productsEl.innerHTML = '';
      list.forEach(p=>{
        const div = document.createElement('div'); div.className='product';
        div.innerHTML = `
          <div class="thumb"><img src="./img/${p.image}" alt="${p.name}"></div>
          <div style="flex:1">
            <div style="font-weight:700">${p.name}</div>
            
          </div>
          <div class="meta">
            <div class="price">${money(p.price)}</div>
          </div>
        `;
        productsEl.appendChild(div);
      })
    }

    function filtered(){
      let res = PRODUCTS.slice();
      const term = q.value.trim().toLowerCase();
      if(filterType.value !== 'all') res = res.filter(r=>r.type === filterType.value);
      if(term) res = res.filter(r=> (r.name + ' ' + r.desc).toLowerCase().includes(term));
      if(sortBy.value === 'price-asc') res.sort((a,b)=>a.price-b.price);
      if(sortBy.value === 'price-desc') res.sort((a,b)=>b.price-a.price);
      return res;
    }

    q.addEventListener('input', ()=>renderProducts(filtered()));
    filterType.addEventListener('change', ()=>renderProducts(filtered()));
    sortBy.addEventListener('change', ()=>renderProducts(filtered()));

    renderProducts(PRODUCTS);
    document.getElementById('year').textContent = new Date().getFullYear();