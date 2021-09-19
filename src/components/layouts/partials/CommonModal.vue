<template>
  <div
    class="modal fade bs-example-modal-xl show "
    tabindex="-1"
    role="dialog"
    aria-labelledby="myExtraLargeModalLabel"
    aria-modal="true"
    style="padding-right: 15px; display: block"
    v-if="modal_show_hide"
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
            @click="closeModal"
          >
            ×
          </button>
        
        </div>
        <div class="modal-body ">
           <slot name="modal_body">
        
          </slot>
          
        </div>
      </div>
      <!-- /.modal-content -->
    </div>
    <!-- /.modal-dialog -->
    
  </div>
  <div id="back_drop" class="modal-backdrop fade show" v-if="modal_show_hide"></div>
</template>

<script>
export default {
  name: "CommonModal",
  props: ['isModalVisible'],

  data: function () {
  return {
      modal_show_hide: this.isModalVisible
  }
},
methods: {
  closeModal() {
        this.modal_show_hide = false;
    }
}
//  created() {
//    this.data.modal_show_hide = this.isModalVisible
//  }
 
};
</script>

<style scoped>
.modal-body{
    height: 80vh;
    overflow-y: auto;
}
</style>