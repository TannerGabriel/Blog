import axios, { AxiosResponse } from 'axios'
import { Payload } from '../types/payload'
const jwtDecode = require('jwt-decode')

export async function validateToken(token: string): Promise<boolean> {
  try {
    const response = await axios.get('http://localhost:3000/auth', {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    })

    return response.data.success
  } catch (err) {
    return false
  }
}

export async function getPayloadFromToken(token: string): Promise<Payload> {
  return jwtDecode(token)
}
