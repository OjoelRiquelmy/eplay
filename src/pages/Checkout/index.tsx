import { useFormik } from 'formik'
import { useState } from 'react'
import * as Yup from 'yup'
import { Row, InputGroup, TagButton } from './styles'
import boleto from '../../assets/images/barcode 1.png'
import cartao from '../../assets/images/credit-card 1.png'
import Button from '../../components/Button'
import Card from '../../components/Card'
import { usePurchaseMutation } from '../../services/api'


const Checkout = () => {
  const [payWithCard, setPayWithCard] = useState (false)
  const [purchase, { isLoading, isError, data, isSuccess }] = usePurchaseMutation()


  const form = useFormik({
    initialValues: {
      fullName: '',
      email:'',
      cpf:'',
      deliveryEmail:'',
      comfirmDeliveryEmail: '',
      cardOwner: '',
      cardisplayName: '',
      cpfCardOwner: '',
      cardNumber: '',
      expiresMonth: '',
      expiresYear: '',
      cardCode: '' ,
      installments: 1
    },
    validationSchema: Yup.object({
      fullName: Yup.string().min(5, 'O nome precisa ser completo').required('Este campo é obrigatório'),
      email: Yup.string().email('E-mail inválido').required('Este campo é obrigatório'),
      cpf: Yup.string().min(14,'O campo precisa ter 14 caracteres').max(14, 'O campo precisa ter 14 caracteres').required('Este campo é obrigatório'),
      deliveryEmail: Yup.string().email('E-mail inválido').required('Este campo é obrigatório'),
      comfirmDeliveryEmail: Yup.string().oneOf([Yup.ref('deliveryEmail')], 'O e-mail não corresponde ao anterior').required('Este campo é obrigatório'),







      cardOwner: Yup.string().when((values, schema) => payWithCard ? schema.required('Este campo é obrigatório') : schema),
      cardisplayName: Yup.string().when((values, schema) => payWithCard ? schema.required('Este campo é obrigatório') : schema),
      cpfCardOwner:Yup.string().when((values, schema) => payWithCard ? schema.required('Este campo é obrigatório') : schema),
      cardNumber: Yup.string().when((values, schema) => payWithCard ? schema.required('Este campo é obrigatório') : schema),
      expiresMonth: Yup.string().when((values, schema) => payWithCard ? schema.required('Este campo é obrigatório') : schema),
      expiresYear: Yup.string().when((values, schema) => payWithCard ? schema.required('Este campo é obrigatório') : schema),
      cardCode: Yup.string().when((values, schema) => payWithCard ? schema.required('Este campo é obrigatório') : schema),
      installments: Yup.string().when((values, schema) => payWithCard ? schema.required('Este campo é obrigatório') : schema)
    }),
    onSubmit: (values) => {
        purchase({
          billing: {
            document: values.cpf,
            email: values.email,
            name: values.fullName,

          },
          delivery: {
            email: values.deliveryEmail,

          },
          payment: {
            installments: 1,
            card: {
              active: payWithCard,
              code: Number(values.cardCode),
              name: values.cardOwner,
              number: values.cardNumber,
              owner: {
                document: values.cpfCardOwner,
                name: values.cardOwner
              },
              expires: {
                month: 1,
                year: 2026
              }
            }
          },
          products: [
            {
              id: 1,
              price: 10
            }
          ]
        })
    }
  })

  const getErrorMessage = (fieldName: string, message?: string) => {
    const touched = fieldName in form.touched
    const invalid = fieldName in form.errors

    if (touched && invalid) return message
    return ''
  }

  return (
    <div className="container">
      {isSuccess ? (
        <Card title='Muito Obrigado' >
        <>
          <p>
            É com satisfação que informamos que recebemos seu pedido com sucesso!<br />
            Abaixo estão os detalhes da sua compra: <br />
            Número do pedido: {data.orderId} <br />
            Forma de pagamento: {payWithCard ? 'Cartão de crédito' : 'Boleto Bancário'}
          </p>
          <p className='margin-top'>
            Caso tenha optado pelo pagamento via boleto bancário, lembre-se de que a confirmação pode levar até 3 dias úteis.
            Após a aprovação do pagamento, enviaremos um e-mail contendo o código de ativação do jogo.
          </p>
          <p className='margin-top'>
            Se você optou pelo pagamento com cartão de crédito, a liberação do código de ativação ocorrerá
            após a aprovação da transação pela operadora do cartão. Você receberá o código no e-mail cadastrado em nossa loja.
          </p>
          <p className='margin-top'>
            Pedimos que verifique sua caixa de entrada e a pasta de spam para garantir que receba nossa comunicação.
            Caso tenha alguma dúvida ou necessite de mais informações, por favor, entre em contato conosco através dos nossos canais de atendimento ao cliente.
          </p>
          <p className='margin-top'>
            Agradecemos por escolher a EPLAY e esperamos que desfrute do seu jogo!
          </p>
        </>
      </Card>
      ) : (<form onSubmit={form.handleSubmit} >
          <Card title='Dados de cobrança'>
            <>
              <Row >
                <InputGroup>
                  <label htmlFor="fullName">Nome completo</label>
                  <input
                  type="text"
                  id='fullName'
                  name='fullName'
                  value={form.values.fullName}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                  />
                  <small>{getErrorMessage('fullName', form.errors.fullName)}</small>
                </InputGroup>
                <InputGroup>
                  <label htmlFor="email">E-mail</label>
                  <input
                  id='email'
                  type="text"
                  name='email'
                  value={form.values.email}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                  />
                  <small>{getErrorMessage('email', form.errors.fullName)}</small>
                </InputGroup>
                <InputGroup>
                  <label htmlFor="cpf">CPF</label>
                  <input
                  id='cpf'
                  type="text"
                  name='cpf'
                  value={form.values.cpf}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                  />
                  <small>{getErrorMessage('cpf', form.errors.fullName)}</small>
                </InputGroup>
              </Row>
              <h3 className='margin-top'>Dados de entrega - conteúdo ddigital</h3>
              <Row>
                <InputGroup>
                  <label htmlFor='deliveryEmail'>E-mail</label>
                  <input
                  id='deliveryEmail'
                  type="email"
                  name='deliveryEmail'
                  value={form.values.deliveryEmail}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                  />
                  <small>{getErrorMessage('deliveryEmail', form.errors.fullName)}</small>
                </InputGroup>
                <InputGroup>
                  <label htmlFor='comfirmDeliveryEmail'>Comfirme o E-mail</label>
                  <input
                  id='comfirmDeliveryEmail'
                  type="email"
                  name='comfirmDeliveryEmail'
                  value={form.values.comfirmDeliveryEmail}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                  />
                  <small>{getErrorMessage('comfirmDeliveryEmail', form.errors.fullName)}</small>
                </InputGroup>
              </Row>
            </>
          </Card>
          <Card title="Pagameto">
            <>
              <TagButton type='button'  $isActive={!payWithCard} onClick={() => setPayWithCard(false)}>
                <img src={boleto} alt="boleto" />
                Boleto bancário
              </TagButton>
              <TagButton type='button'  $isActive={payWithCard} onClick={() => setPayWithCard(true)}>
                <img src={cartao} alt="cartão de crédito" />
                Cartão de crádito
              </TagButton>
              <div className='margin-top'>
                  {payWithCard ? (
                  <>
                    <Row $marginTop='24px'>
                    <InputGroup>
                      <label htmlFor="cardOwner">
                        Nome titular do cartão
                      </label>
                      <input
                      id='cardOwner'
                      type="text"
                      name='cardOwner'
                      value={form.values.cardOwner}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                      />
                      <small>{getErrorMessage('cardOwner', form.errors.fullName)}</small>
                    </InputGroup>
                    <InputGroup>
                      <label htmlFor="cardisplayName">
                        Nome do cartão
                      </label>
                      <input
                      id='cardDisplayName'
                      type="text"
                      name='cardisplayName'
                      value={form.values.cardisplayName}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                      />
                      <small>{getErrorMessage('ccardDisplayName', form.errors.fullName)}</small>
                    </InputGroup>
                    </Row>
                    <Row $marginTop='24px'>
                    <InputGroup>
                      <label htmlFor="cpfCardOwner">
                        CPF do titular do cartão
                      </label>
                      <input
                      id='cpfCardaOwner'
                      type="text"
                      name='cpfCardOwner'
                      value={form.values.cpfCardOwner}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                      />
                      <small>{getErrorMessage('cpfOwner', form.errors.fullName)}</small>
                    </InputGroup>
                    <InputGroup>
                      <label htmlFor="cardNumber">
                        Número do cartão
                      </label>
                      <input
                      id='cardNumber'
                      type="text"
                      name='cardNumber'
                      value={form.values.cardNumber}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                      />
                      <small>{getErrorMessage('cardNumber', form.errors.fullName)}</small>
                    </InputGroup>
                    <InputGroup $maxWidth='123px'>
                      <label htmlFor="expiresMonth">
                        Mês do vencimento
                      </label>
                      <input
                      id='expiresMonth'
                      type="text"
                      name='expiresMonth'
                      value={form.values.expiresMonth}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                      />
                      <small>{getErrorMessage('expiresMonth', form.errors.fullName)}</small>
                    </InputGroup>
                    <InputGroup $maxWidth='123px'>
                      <label htmlFor="expiresYear">
                        Ano do vencimento
                      </label>
                      <input
                      id='expiresYear'
                      type="text"
                      name='expiresYear'
                      value={form.values.expiresYear}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                      />
                      <small>{getErrorMessage('expiresYear', form.errors.fullName)}</small>
                    </InputGroup>
                    <InputGroup $maxWidth='48px'>
                      <label htmlFor="cardCode">
                        CVV
                      </label>
                      <input
                      id='cardCode'
                      type="text"
                      name='cardCode'
                      value={form.values.cardCode}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                      />
                      <small>{getErrorMessage('cardCode', form.errors.fullName)}</small>
                    </InputGroup>
                  </Row>
                  </>
                ) : (
                  <p>
                    Ao optar por essa forma de pagamento, é importante lembrar que a
                    confirmação pode levar até 3 dias úteis, devido aos prazos estabelecidos
                    pelas instituições financeiras. Portanto, a liberação do código de ativação
                    do jogo adquirido ocorrerá somente após a aprovação do pagamento do boleto.
                  </p>
                )}
              </div>


                <Row $marginTop='24px'>
                  <InputGroup $maxWidth='150px'>
                  <label htmlFor="installments">Parcelamento</label>
                  <select name="installments" id="installments" onChange={form.handleChange}
                  onBlur={form.handleBlur}>
                    <option value="">1X de R$ 200,00</option>
                    <option value="">2X de R$ 200,00</option>
                    <option value="">3X de R$ 200,00</option>
                  </select>
                  <small>{getErrorMessage('installments', form.errors.fullName)}</small>
                  </InputGroup>
                </Row>
            </>
          </Card>

          <Button
            type="submit"
            onClick={form.handleSubmit}
            title="Clique aqui para finalizar a compra"
            disabled={isLoading}
          >
            {isLoading ? 'Finalizando compra...' : 'Finalizar compra'}
          </Button>
      </form>)}
    </div>


  )

}


export default Checkout
