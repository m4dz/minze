import { test, expect } from '@playwright/test'
import { start } from 'playground/tests/minze/utils'

test('Minze: version', async ({ page }) => {
  await start(page)

  expect(await page.locator('.minze-version').innerText()).toMatch(
    /^\d+\.\d+\.\d+$/
  )
})