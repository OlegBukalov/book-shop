import { Injectable } from '@angular/core';

export function generatorFactory(n: number): string {
  let text = '';
  const symbols = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  for (let i = 0; i < n; i++) {
    text += symbols.charAt(Math.floor(Math.random() * symbols.length));
  }
  return text;
}

@Injectable({
  providedIn: 'root',
  useFactory: generatorFactory,
})
export class GeneratorService {
}
