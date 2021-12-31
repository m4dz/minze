import { test, expect } from '@playwright/test'
import { start } from 'playground/tests/minze/utils'

test('Minze: events', async ({ page }) => {
  await start(page)

  const selector = '.minze-events'

  expect(await page.locator(selector).count()).toBe(1)
  expect(await page.locator(selector).innerText()).toBe('test')
})