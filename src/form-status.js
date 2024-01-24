// shared object to control the state of the input form 
export const status = {
    formStatus : 'closed',
    changeStatus : function(value) {
        this.formStatus = value;
    }
};