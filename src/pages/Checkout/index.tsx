import { useFormik } from 'formik'
import { useEffect, useState } from 'react'
import InputMask from 'react-input-mask'
import { useDispatch, useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

import * as Yup from 'yup'
import * as S from './styles'
import barCode from '../../assets/images/barcode 1.png'
import creditCard from '../../assets/images/credit-card 1.png'
import Button from '../../components/Button'
import Card from '../../components/Card'

import { usePurchaseMutation } from '../../services/api'
import { RootReducer } from '../../store'
import { clear } from '../../store/reducers/cart'
import { getTotalPrice, parseToBrl } from '../../utils/index'

type Installments = {
  quantity: number
  amount: number
  formttedAmount: string
}

const Checkout = () => {
  const [payWithCard, setPayWithCard] = useState (false)
  const [purchase, { isLoading, data, isSuccess }] = usePurchaseMutation()
  const { items } = useSelector((state:RootReducer) => state.cart)
  const [installments, setInstalment] = useState<Installments[]>([])
  const dispatch = useDispatch()

  const totalPrice = getTotalPrice(items)

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
      installments: Yup.number().when((values, schema) => payWithCard ? schema.required('Este campo é obrigatório') : schema)
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
            installments: values.installments,
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
                month: Number(values.expiresMonth),
                year: Number(values.expiresYear)
              }
            }
          },
          products: items.map((item) => ({
            id: item.id,
            price: item.prices.current as number
          }))
        })
    }
  })

  const checkInputHasError = (fieldName: string) => {
    const touched = fieldName in form.touched
    const invalid = fieldName in form.errors
    const hasError = touched && invalid

    return hasError
  }



  useEffect(() => {
    const calculateInstallments = () => {
    const installmentsArray: Installments[] = []
    for (let i = 1; i <= 6; i++){
      installmentsArray.push({
        quantity: i,
        amount: totalPrice / i,
        formttedAmount: parseToBrl(totalPrice / i)
      })
    }

    return installmentsArray
  }

    if (totalPrice > 0){
      setInstalment(calculateInstallments())
    }

  }, [totalPrice])

  useEffect(() => {
    if (isSuccess) {
      dispatch(clear())
    }
  },[isSuccess, dispatch])

  if (items.length === 0 && !isSuccess) {
    return<Navigate to='/'/>
  }

  return (
    <div className="container">
      {isSuccess && data ? (
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
              <S.Row >
                <S.InputGroup>
                  <label htmlFor="fullName">Nome completo</label>
                  <input
                  type="text"
                  id='fullName'
                  name='fullName'
                  value={form.values.fullName}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                  className={checkInputHasError('fullName') ? 'error' : ''}
                  />

                </S.InputGroup>
                <S.InputGroup>
                  <label htmlFor="email">E-mail</label>
                  <input
                  id='email'
                  type="text"
                  name='email'
                  value={form.values.email}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                  className={checkInputHasError('email') ? 'error' : ''}
                  />

                </S.InputGroup>
                <S.InputGroup>
                  <label htmlFor="cpf">CPF</label>
                  <InputMask
                  id='cpf'
                  type="text"
                  name='cpf'
                  value={form.values.cpf}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                  className={checkInputHasError('cpf') ? 'error' : ''}
                  mask="000.000.000-00"
                  />

                </S.InputGroup>
              </S.Row>
              <h3 className='margin-top'>Dados de entrega - conteúdo ddigital</h3>
              <S.Row>
                <S.InputGroup>
                  <label htmlFor='deliveryEmail'>E-mail</label>
                  <input
                  id='deliveryEmail'
                  type="email"
                  name='deliveryEmail'
                  value={form.values.deliveryEmail}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                  className={checkInputHasError('deliveryEmail') ? 'error' : ''}
                  />

                </S.InputGroup>
                <S.InputGroup>
                  <label htmlFor='comfirmDeliveryEmail'>Comfirme o E-mail</label>
                  <input
                  id='comfirmDeliveryEmail'
                  type="email"
                  name='comfirmDeliveryEmail'
                  value={form.values.comfirmDeliveryEmail}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                  className={checkInputHasError('comfirmDeliveryEmail') ? 'error' : ''}
                  />

                </S.InputGroup>
              </S.Row>
            </>
          </Card>
          <Card title="Pagameto">
            <>
              <S.TagButton type='button'  $isActive={!payWithCard} onClick={() => setPayWithCard(false)}>
                <img src={barCode} alt="boleto" />
                Boleto bancário
              </S.TagButton>
              <S.TagButton type='button'  $isActive={payWithCard} onClick={() => setPayWithCard(true)}>
                <img src={creditCard} alt="cartão de crédito" />
                Cartão de crádito
              </S.TagButton>
              <div className='margin-top'>
                  {payWithCard ? (
                  <><>
                    <S.Row $marginTop='24px'>
                      <S.InputGroup>
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
                          className={checkInputHasError('cardOwner') ? 'error' : ''} />

                      </S.InputGroup>
                      <S.InputGroup>
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
                          className={checkInputHasError('cardDisplayName') ? 'error' : ''} />

                      </S.InputGroup>
                    </S.Row>
                    <S.Row $marginTop='24px'>
                      <S.InputGroup>
                        <label htmlFor="cpfCardOwner">
                          CPF do titular do cartão
                        </label>
                        <InputMask
                          id='cpfCardaOwner'
                          type="text"
                          name='cpfCardOwner'
                          value={form.values.cpfCardOwner}
                          onChange={form.handleChange}
                          onBlur={form.handleBlur}
                          className={checkInputHasError('cpfCardOwner') ? 'error' : ''}
                          mask="000.000.000-00"
                          />

                      </S.InputGroup>
                      <S.InputGroup>
                        <label htmlFor="cardNumber">
                          Número do cartão
                        </label>
                        <InputMask
                          id='cardNumber'
                          type="text"
                          name='cardNumber'
                          value={form.values.cardNumber}
                          onChange={form.handleChange}
                          onBlur={form.handleBlur}
                          className={checkInputHasError('cardNumber') ? 'error' : ''}
                          mask="0000 0000 0000 0000"
                          />

                      </S.InputGroup>
                      <S.InputGroup $maxWidth='123px'>
                        <label htmlFor="expiresMonth">
                          Mês de expiração
                        </label>
                        <InputMask
                          id='expiresMonth'
                          type="text"
                          name='expiresMonth'
                          value={form.values.expiresMonth}
                          onChange={form.handleChange}
                          onBlur={form.handleBlur}
                          className={checkInputHasError('expiresMonth') ? 'error' : ''}
                          mask="00"
                          />

                      </S.InputGroup>
                      <S.InputGroup $maxWidth='123px'>
                        <label htmlFor="expiresYear">
                          Ano de expiração
                        </label>
                        <InputMask
                          id='expiresYear'
                          type="text"
                          name='expiresYear'
                          value={form.values.expiresYear}
                          onChange={form.handleChange}
                          onBlur={form.handleBlur}
                          className={checkInputHasError('expiresYear') ? 'error' : ''}
                          mask="00"
                          />

                      </S.InputGroup>
                      <S.InputGroup $maxWidth='48px'>
                        <label htmlFor="cardCode">
                          CVV
                        </label>
                        <InputMask
                          id='cardCode'
                          type="text"
                          name='cardCode'
                          value={form.values.cardCode}
                          onChange={form.handleChange}
                          onBlur={form.handleBlur}
                          className={checkInputHasError('cardCode') ? 'error' : ''}
                          mask="000"
                          />

                      </S.InputGroup>
                    </S.Row>
                  </><S.Row $marginTop="24px">
                      <S.InputGroup $maxWidth="150px">
                        <label htmlFor="installments">Parcelamento</label>
                        <select
                          id="installments"
                          name="installments"
                          value={form.values.installments}
                          onChange={form.handleChange}
                          onBlur={form.handleBlur}
                          className={checkInputHasError('installments') ? 'error' : ''}
                        >
                          {installments.map((installment) => (
                            <option
                              value={installment.quantity}
                              key={installment.quantity}
                            >
                              {installment.quantity}x de{' '}
                              {installment.formttedAmount}
                            </option>
                          ))}
                        </select>
                      </S.InputGroup>
                    </S.Row></>
                ) : (
                  <p>
                    Ao optar por essa forma de pagamento, é importante lembrar que a
                    confirmação pode levar até 3 dias úteis, devido aos prazos estabelecidos
                    pelas instituições financeiras. Portanto, a liberação do código de ativação
                    do jogo adquirido ocorrerá somente após a aprovação do pagamento do boleto.
                  </p>
                )}
              </div>

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
      </form>
    )}
    </div>


  )

}


export default Checkout
