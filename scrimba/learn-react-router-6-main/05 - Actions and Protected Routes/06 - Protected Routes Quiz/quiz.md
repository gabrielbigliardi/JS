1. How did we change our route definitions in order to 
   "protect" certain routes from an un-logged-in user?
   Set the protected route as a child of a auth component

   Wrapped the routes we wanted to protect in a Layout route
that contains logic to redirect someone if they're not logged
in
   
2. What component can we use to automatically send someone
   to a different route in our app?
   <Navigate /> Component

3. What component can we render if the user IS logged in?
   Host, secret informations about the user

   <Outlet />