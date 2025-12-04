import type { HttpContext } from '@adonisjs/core/http'
import app from '@adonisjs/core/services/app'
import { cuid } from '@adonisjs/core/helpers'
import Media from '#models/media'
import Noticia from '#models/noticia'
import { Console } from 'console'
import { REFUSED } from 'dns'

export default class MediasController {
  public async index({}: HttpContext) {
    const media = await Media.all()
    return media
  }

  private validationOptions = {
    types: ['image'],
    size: '2mb',
  }

  public async store({ request, params, response }: HttpContext) {
   // const body = request.body()
     const body = request.only([ 'url', 'img', 'noticiaId'])
    const noticiaId = params.noticiaId
           
    await Noticia.findOrFail('noticiaId', noticiaId)
    console.log('MOSTRA O ID '+ noticiaId);
     
    body.noticiaId = noticiaId
 
    try {
      //ENVIO DE IMAGEM
      const imagem = request.file('img', this.validationOptions)

      if (imagem) {
        const imagemName = `${cuid()}.${imagem!.extname}`
        await imagem.move(app.makePath('storage/uploads'), {
          name: imagemName,
        })
        body.img = imagemName
      }

      const media = await Media.create(body)

      response.status(201)

      return {
        message: 'Nova Media criada com sucesso',
        data: media,
      }
    } catch (error) {
      return response.unauthorized({
        error: true,
        message: 'Erro na criação , Verifique seus dados',
      })
    }
  }

  public async show({ request }: HttpContext) {
    const media_id = request.param('id')
    const media = await Media.find(media_id)
    return media
  }

  public async update({ request }: HttpContext) {
    const media_id = request.param('id')
    const body = request.only(['url', 'img'])
    const media = await Media.find(media_id)
    await media?.merge(body).save()

    return media
  }

  public async destroy({ request }: HttpContext) {
    const media_id = request.param('id')
    const media = await Media.findOrFail(media_id)
    await media.delete()
    return 'Comentario eliminado'
  }
}
