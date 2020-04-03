<style>
  .ratio-image {
    width: 100%;
    position: relative;
  }
  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: block;
    object-fit: cover;
  }
</style>

<script>
  export let src;
  export let alt;
  export let widthRatio;
  export let heightRatio;

  $: paddingTop = `${(heightRatio / widthRatio) * 100}%`;
</script>

<div class="ratio-image" style="padding-top:{paddingTop};">
  <img {src} {alt} />
</div>
