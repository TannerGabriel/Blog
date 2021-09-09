export default async function({ app, redirect }) {
  if (
    app.context.route.fullPath !== "/login" &&
    app.context.route.fullPath !== "/register" &&
    !app.$supabase.auth.user()
  ) {
    redirect("/login");
  }
}
