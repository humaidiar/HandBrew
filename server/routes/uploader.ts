import { Router } from 'express'
import { UploadedFile } from 'express-fileupload'
import { readdir, writeFile } from 'node:fs/promises'
import { join } from 'node:path'

const router = Router()

router.get('/', async (req, res) => {
  const files = await (
    await readdir(join(__dirname, '../public/images'))
  ).reverse()
  res.json(files)
})

router.post('/', async (req, res) => {
  try {
    const image = req.files?.image as UploadedFile
    const fileData = image.data
    const name = image.name

    await writeFile(join(__dirname, '../public/images', name), fileData)

    res.json({ name })
  } catch (e) {
    res.status(500).json({ msg: (e as Error).message })
  }
})
export default router
