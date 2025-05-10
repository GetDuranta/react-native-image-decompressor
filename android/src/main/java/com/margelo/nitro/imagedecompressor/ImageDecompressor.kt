package com.margelo.nitro.imagedecompressor
  
import com.facebook.proguard.annotations.DoNotStrip

@DoNotStrip
class ImageDecompressor : HybridImageDecompressorSpec() {
  override fun multiply(a: Double, b: Double): Double {
    return a * b
  }
}
