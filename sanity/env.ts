export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2024-04-16'

export const dataset = assertValue(
  process.env.NEXT_PUBLIC_SANITY_DATASET || "production" ,
  'Missing environment variable: NEXT_PUBLIC_SANITY_DATASET'
)

export const projectId = assertValue(
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID|| "ahsq24ap" ,
  'Missing environment variable: NEXT_PUBLIC_SANITY_PROJECT_ID'
)

export const token = assertValue(
  process.env.SANITY_WRITE_TOKEN|| "skgnKmC5MVzdINCFrLciWyMx8tgcAUShdkkYPcrPayRCGy7V7B2KdF3p0eD78uQobKmnN0MfH3c7WAxQElGK8bo5j10pEpx8E2k8biQEYdcPN2W9W146ua7TErKTVH4qm85TcdusakEb1GSUiReNFLYwoFcpJkGJrtSAAPcKDMcdiG33MJH6" ,
  'Missing environment variable: NEXT_PUBLIC_SANITY_PROJECT_ID'
)


export const useCdn = false

function assertValue<T>(v: T | undefined, errorMessage: string): T {
  if (v === undefined) {
    throw new Error(errorMessage)
  }

  return v
}
