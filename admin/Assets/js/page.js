var page = {
    ajaxMethod: 'POST',

    add: function() {
        let formData = new FormData();

        formData.append('title', $('#formTitle').val());
        formData.append('content', $('.redactor-editor').html());

        $.ajax({
            url: '/admin/page/add/',
            type: this.ajaxMethod,
            data: formData,
            cache: false,
            processData: false,
            contentType: false,
            beforeSend: function(){

            },
            success: function(result){
                window.location = '/admin/pages/edit/' + result;
                console.log(result);

            }
        });
    },

    update: function() {
        let formData = new FormData();

        formData.append('page_id', $('#formPageId').val());
        formData.append('title',   $('#formTitle').val());
        formData.append('content', $('#redactor-editor').val());

        $.ajax({
           url: '/admin/page/update/',
           type: this.ajaxMethod,
           data:formData,
           cache: false,
           processData: false,
           contentType:false,
           beforeSend: function() {

           },
            success: function(result) {
               console.log(result);
            }

        });
    }
};

