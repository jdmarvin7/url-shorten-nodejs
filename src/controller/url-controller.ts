import { Request, Response } from 'express';
import shortid from 'shortid';
import { config } from '../config/Constant'
import { URL } from '../models/URL';
export class UrlController {
    public async shorten(req: Request, res: Response): Promise<void> {
        const { originUrl } = req.body;
        const hash = shortid.generate()

        const shortURL = `${config.API_URL}/${hash}`

        const create = await URL.create({ hash, shortURL, originUrl })
        const url = await URL.findOne({ originUrl })
        if(url) {
            res.json(url)
            return;
        }
        res.json({
            originUrl,
            hash,
            shortURL
        })
    }

    public async redirect(req: Request, res: Response): Promise<void> {
        const {hash} = req.params

        const url = await URL.findOne({ hash })

        if(url) {
            res.redirect(url.originUrl)
        }

        res.status(400).json({
            error: "Ocorreu um erro!!"
        })
    }
}