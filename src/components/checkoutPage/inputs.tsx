import { useFormContext } from 'react-hook-form'
import styled from 'styled-components'
import { ValidationSchemma } from './form/validation'

export default function Inputs(){
  const {register} = useFormContext<ValidationSchemma>()

  return(
    <ContainerInputs>
              <Input 
              type="text"  
              widthInput={'200'}
              placeholder="CEP" 
              {...register('cep')}
              />
              <Input 
              type="text"  
              widthInput={'560'}
              {...register('street')}
              placeholder="rua"/>
              <Label>
                <Input 
                type="text"  
                widthInput={'200'}
                {...register('number')}
                placeholder="numero" />
                <Input 
                type="text"  
                widthInput={'348'}
              {...register('complement')}
                placeholder="complemento" />
              </Label>
              <Label>
                <Input 
                type="text"  
                widthInput={'200'}
              {...register('district')}
              placeholder="bairro" />
                <Input 
                type="text"  
                widthInput={'278'}
                {...register('city')}
                placeholder="cidade" />
                <Input 
                type="text"  
                 {...register('uf')}
                widthInput={'60'} 
                placeholder="UF" />
              </Label>
            </ContainerInputs>
  )
}

const BaseInput = styled.input`
  display: flex;
  padding: 12px;
  align-items: center;
  gap: 4px;border-radius: 4px;
  border: 1px solid var(--base-button, #E6E5E5);
  background: var(--base-input, #EDEDED);

  `


interface InputProps {
  widthInput: string
}

const ContainerInputs = styled.div`
display: flex;
flex-direction: column;
gap: 16px;
`

const Label = styled.label`
display: flex;
gap: 12px;
`

const Input = styled(BaseInput)<InputProps>`
width: ${props => props.widthInput}px;
&::placeholder{
  text-transform: capitalize;
}
  
`