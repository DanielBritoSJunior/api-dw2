import express, {Request, Response} from 'express'
import routes from './routes'

const app = express()
const PORT = 3000

app.use(express.json())

app.use('/api', routes)

app.get('/', (req: Request, res: Response) => {
    res.send('Olá Mundo')
})

app.listen(PORT,()=>{
    console.log(`Rodando em http://localhost:${PORT}`)
})



