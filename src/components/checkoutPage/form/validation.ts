import { z } from 'zod'

export enum PaymentMethods {
  credit = 'credit',
  debit = 'debit',
  money = 'money',
}
export const validationSchemma = z.object({
  cep: z.string().min(1, 'Informe o CEP'),
  street: z.string().min(1, 'Informe o Rua'),
  number: z.string().min(1, 'Informe o Número'),
  complement: z.string(),
  district: z.string().min(1, 'Informe o Bairro'),
  city: z.string().min(1, 'Informe a Cidade'),
  uf: z.string().min(1, 'Informe a UF'),
  paymentMethod: z.nativeEnum(PaymentMethods, {
    errorMap: () => {
      return { message: 'Informe o método de pagamento' }
    },
  }),
})

export type ValidationSchemma = z.infer<typeof validationSchemma>