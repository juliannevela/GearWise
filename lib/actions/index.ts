'use server';

import { scrapeClassGear } from '../scraper';

export async function scapeAndStoreGear(playerClass: string) {
  if (!playerClass) return;
  const scrapedGear = await scrapeClassGear(playerClass);
  try {
  } catch (error: any) {
    throw new Error(`Failed to create/update class: ${error.message}`);
  }
}
