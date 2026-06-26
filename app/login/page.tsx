import { login, signup } from './actions'

export default function LoginPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-100 px-6">
      <form className="w-full max-w-sm rounded-lg bg-white p-6 shadow">
        <h1 className="mb-6 text-2xl font-semibold text-gray-900">Log in</h1>

        <div className="mb-4">
          <label
            htmlFor="email"
            className="mb-2 block text-sm font-medium text-gray-700"
          >
            Email
          </label>

          <input
            id="email"
            name="email"
            type="email"
            className="w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 outline-none focus:border-blue-500"
          />
        </div>

        <div className="mb-6">
          <label
            htmlFor="password"
            className="mb-2 block text-sm font-medium text-gray-700"
          >
            Password
          </label>

          <input
            id="password"
            name="password"
            type="password"
            className="w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 outline-none focus:border-blue-500"
          />
        </div>

        <button
          type="submit"
          formAction={login}
          className="w-full rounded-md bg-blue-600 px-4 py-2 font-medium text-white hover:bg-blue-700 mb-2"
        >
          Log in
        </button>

        <button
          type="submit"
          formAction={signup}
          className="w-full rounded-md bg-blue-600 px-4 py-2 font-medium text-white hover:bg-blue-700"
        >
          Sign up
        </button>
      </form>
    </main>
  )
}
