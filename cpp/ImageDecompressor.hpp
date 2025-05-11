#pragma once

#include <NitroModules/ArrayBuffer.hpp>
#include "HybridImageDecompressorSpec.hpp"
#include "HybridDelayedImageSpec.hpp"

namespace margelo::nitro::imagedecompressor {

  using namespace margelo::nitro;

  class ImageDecompressor: public HybridImageDecompressorSpec {
  public:
    ImageDecompressor() : HybridImageDecompressorSpec() {}

    virtual ImageInfo decompressImage(const std::shared_ptr<ArrayBuffer>& compressed);

    virtual std::shared_ptr<margelo::nitro::imagedecompressor::HybridDelayedImageSpec>
      decompressImageInBackground(const std::shared_ptr<ArrayBuffer>& compressed,
      double expectedWidth, double expectedHeight) {
      return nullptr;
    }

    virtual bool waitForPendingDecompressors() {
      return true;
    }
  };

};
