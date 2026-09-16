import assert from 'node:assert/strict'
import { test } from 'node:test'

import { detectLang } from './copy.ts'

test('escolha salva vence a preferencia do navegador', () => {
  assert.equal(detectLang('en', ['pt-BR']), 'en')
  assert.equal(detectLang('pt', ['en-US']), 'pt')
})

test('sem escolha salva, segue a ordem de preferencia do navegador', () => {
  assert.equal(detectLang(null, ['pt-BR', 'en-US']), 'pt')
  assert.equal(detectLang(null, ['en-US', 'pt-BR']), 'en')
  assert.equal(detectLang(null, ['PT']), 'pt')
})

test('pula idiomas nao suportados e cai em ingles quando nenhum serve', () => {
  assert.equal(detectLang(null, ['es-ES', 'pt-BR']), 'pt')
  assert.equal(detectLang(null, ['es-ES', 'fr-FR']), 'en')
  assert.equal(detectLang(null, []), 'en')
})

test('valor invalido salvo nao trava a deteccao', () => {
  assert.equal(detectLang('klingon', ['pt-BR']), 'pt')
})
