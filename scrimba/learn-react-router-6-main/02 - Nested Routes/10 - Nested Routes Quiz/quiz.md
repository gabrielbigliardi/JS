1. What is the primary reason to use a nested route?
reutilizar elementos para mais de uma pagina mas ainda modificar outro conteudo


2. What is a "Layout Route"?
é a camada que permanece, mesmo alterando a rota


3. What does the <Outlet /> component do? When do you use it?
permite a exibição do conteudo que esta dentro da rota


4. What is an "Index Route"?
para identificar alguma das paginas como a rota principal de abertura





1. What is the primary reason to use a nested route?
Whenever we have some shared UI between routes in our app.


2. What is a "Layout Route"?
It's the parent route of some nested routes that contains just
the portion of the UI that will be shared. It will use an Outlet
component.


3. What does the <Outlet /> component do? When do you use it?
We use it anytime we have a parent Route that's wrapping 
children routes. It renders the matching child route's
`element` prop given in its route definition


4. What is an "Index Route"?
It's the "default route" we want to render when the path
of the parent route matches. It gives us a chance to render
an element inside the parent's <Outlet /> at the same path
as the parent route.