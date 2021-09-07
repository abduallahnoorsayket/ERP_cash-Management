<template>
 <div
        class="modal fade bs-example-modal-xl"
        tabindex="-1"
        role="dialog"
        aria-labelledby="myExtraLargeModalLabel"
        style="display: block; padding-right: 15px"
        aria-modal="true"
      >
        <div class="modal-dialog modal-xl">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="myLargeModalLabel">
                Requisition Details
              </h5>
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                aria-hidden="true"
                @click="closeModalBtn"
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
    name: 'CommonModal',
    data () {
        

        return {}
    }
}
</script>

<style lang="scss" scoped>

</style>