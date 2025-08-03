'use client'

import { useState } from 'react'
import { supabase } from '@/utils/supabaseClient'
import { useRouter } from 'next/navigation'

export default function SignupPage() {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError(null)

    const { data, error } = await supabase.auth.signUp({
      email,
      password
    })

    if (error) {
      setError(error.message)
      setLoading(false)
    } else {
      router.push('/setup')
    }
  }

  return (
    <div className="max-w-md mx-auto mt-10 p-6 border rounded bg-white shadow text-black">
      <h1 className="text-2xl font-semibold mb-4">Sign Up</h1>
      <form onSubmit={handleSignup}>
        <label className="block mb-2">
          Email
          <input
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            className="w-full mt-1 p-2 border border-gray-300 rounded bg-white text-black"
            required
          />
        </label>
        <label className="block mb-4">
          Password
          <input
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            className="w-full mt-1 p-2 border border-gray-300 rounded bg-white text-black"
            required
          />
        </label>
        {error && <p className="text-red-600 mb-2">{error}</p>}
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
        >
          {loading ? 'Creating Account...' : 'Sign Up'}
        </button>
      </form>
    </div>
  )
}
