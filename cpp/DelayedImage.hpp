#pragma once

#include <NitroModules/ArrayBuffer.hpp>
#include "HybridDelayedImageSpec.hpp"

namespace margelo::nitro::imagedecompressor {

  using namespace margelo::nitro;

  class DelayedImage : public HybridDelayedImageSpec {
  public:
    DelayedImage() : HybridDelayedImageSpec() {}

    virtual std::shared_ptr<ArrayBuffer> getRgba() {
      return nullptr;
    }
    virtual bool inflight() { return false; }
    virtual bool success() { return false; }

  private:

  };
};
