<template>
  <div
    class="modal fade bs-example-modal-xl show"
    tabindex="-1"
    role="dialog"
    aria-labelledby="myExtraLargeModalLabel"
    aria-modal="true"
    style="padding-right: 15px; display: block"
  >
    <div class="modal-dialog modal-xl">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="myExtraLargeModalLabel">
            
           <slot name="modal_header">
         
          </slot>
          </h5>
          <button
            type="button"
            class="close"
            data-dismiss="modal"
            aria-hidden="true"
          >
            ×
          </button>
        </div>
        <div class="modal-body">

           <slot name="modal_body">
         
          </slot>
          
        </div>
      </div>
      <!-- /.modal-content -->
    </div>
    <!-- /.modal-dialog -->
  </div>
</template>

<script>
export default {
  name: "CommonModal",
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
</style>