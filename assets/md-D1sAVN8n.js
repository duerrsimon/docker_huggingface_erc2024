import{_ as h}from"./slidev/CodeBlockWrapper.vue_vue_type_script_setup_true_lang-C10I68jw.js";import{o as r,c as p,k as e,e as s,l as d,m as o,aa as i,q as D,s as c,B as l}from"./modules/vue-Bibp_NsF.js";import{I as A}from"./slidev/default-B8NQS9Un.js";import{u as g,f as E}from"./slidev/context-CNA_1x_z.js";import"./modules/unplugin-icons-Cl3WiKmk.js";import"./index-D8gO42eL.js";import"./modules/shiki-QRp8FIjz.js";const O={__name:"slides.md__slidev_15",setup(y){const{$slidev:C,$nav:B,$clicksContext:t,$clicks:m,$page:u,$renderContext:f,$frontmatter:n}=g();return t.setup(),(_,a)=>{const k=h;return r(),p(A,D(c(l(E)(l(n),14))),{default:e(()=>[a[1]||(a[1]=s("h1",null,"Dockerfile",-1)),d(k,o({lines:!0},{ranges:["all","1","2","4-6","8-9","10","12-14","16","all"]}),{default:e(()=>a[0]||(a[0]=[s("pre",{class:"shiki shiki-themes vitesse-dark vitesse-light slidev-code",style:{"--shiki-dark":"#dbd7caee","--shiki-light":"#393a34","--shiki-dark-bg":"#121212","--shiki-light-bg":"#ffffff"}},[s("code",{class:"language-dockerfile"},[s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#4D9375","--shiki-light":"#1E754F"}},"FROM"),s("span",{style:{"--shiki-dark":"#DBD7CAEE","--shiki-light":"#393A34"}}," python:3.12")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#4D9375","--shiki-light":"#1E754F"}},"WORKDIR"),s("span",{style:{"--shiki-dark":"#DBD7CAEE","--shiki-light":"#393A34"}}," /usr/local/app")]),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#758575DD","--shiki-light":"#A0ADA0"}},"# Install the application dependencies")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#4D9375","--shiki-light":"#1E754F"}},"COPY"),s("span",{style:{"--shiki-dark":"#DBD7CAEE","--shiki-light":"#393A34"}}," requirements.txt ./")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#4D9375","--shiki-light":"#1E754F"}},"RUN"),s("span",{style:{"--shiki-dark":"#DBD7CAEE","--shiki-light":"#393A34"}}," pip install --no-cache-dir -r requirements.txt")]),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#758575DD","--shiki-light":"#A0ADA0"}},"# Copy in the source code")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#4D9375","--shiki-light":"#1E754F"}},"COPY"),s("span",{style:{"--shiki-dark":"#DBD7CAEE","--shiki-light":"#393A34"}}," src ./src")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#4D9375","--shiki-light":"#1E754F"}},"EXPOSE"),s("span",{style:{"--shiki-dark":"#DBD7CAEE","--shiki-light":"#393A34"}}," 5000")]),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#758575DD","--shiki-light":"#A0ADA0"}},"# Setup an app user so the container doesn't run as the root user")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#4D9375","--shiki-light":"#1E754F"}},"RUN"),s("span",{style:{"--shiki-dark":"#DBD7CAEE","--shiki-light":"#393A34"}}," useradd app")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#4D9375","--shiki-light":"#1E754F"}},"USER"),s("span",{style:{"--shiki-dark":"#DBD7CAEE","--shiki-light":"#393A34"}}," app")]),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#4D9375","--shiki-light":"#1E754F"}},"CMD"),s("span",{style:{"--shiki-dark":"#DBD7CAEE","--shiki-light":"#393A34"}}," ["),s("span",{style:{"--shiki-dark":"#C98A7D","--shiki-light":"#B56959"}},'"uvicorn"'),s("span",{style:{"--shiki-dark":"#DBD7CAEE","--shiki-light":"#393A34"}},", "),s("span",{style:{"--shiki-dark":"#C98A7D","--shiki-light":"#B56959"}},'"app.main:app"'),s("span",{style:{"--shiki-dark":"#DBD7CAEE","--shiki-light":"#393A34"}},", "),s("span",{style:{"--shiki-dark":"#C98A7D","--shiki-light":"#B56959"}},'"--host"'),s("span",{style:{"--shiki-dark":"#DBD7CAEE","--shiki-light":"#393A34"}},", "),s("span",{style:{"--shiki-dark":"#C98A7D","--shiki-light":"#B56959"}},'"0.0.0.0"'),s("span",{style:{"--shiki-dark":"#DBD7CAEE","--shiki-light":"#393A34"}},", "),s("span",{style:{"--shiki-dark":"#C98A7D","--shiki-light":"#B56959"}},'"--port"'),s("span",{style:{"--shiki-dark":"#DBD7CAEE","--shiki-light":"#393A34"}},", "),s("span",{style:{"--shiki-dark":"#C98A7D","--shiki-light":"#B56959"}},'"8080"'),s("span",{style:{"--shiki-dark":"#DBD7CAEE","--shiki-light":"#393A34"}},"]")])])],-1)])),_:1},16)]),_:1},16)}}};export{O as default};
