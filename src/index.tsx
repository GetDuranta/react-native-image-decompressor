import { NitroModules } from 'react-native-nitro-modules';
import type { ImageDecompressor } from './ImageDecompressor.nitro';

const ImageDecompressorHybridObject =
  NitroModules.createHybridObject<ImageDecompressor>('ImageDecompressor');

export function multiply(a: number, b: number): number {
  return ImageDecompressorHybridObject.multiply(a, b);
}
