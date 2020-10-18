<template>
    <transition name="modal">
        <div class="modal-mask">
            <div class="modal-wrapper" @click.self="$store.dispatch('setShowModal', false)">
                <div class="container">
                    <div class="md:px-12 py-12">
                        <div class="modal-container absolute md:relative top-12 md:top-0">
                            <slot></slot>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </transition>
</template>

<style scoped>
    .modal-mask {
        position: fixed;
        z-index: 9998;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.5);
        display: table;
        transition: opacity 0.3s ease;
        padding: 0 3rem;
    }

    .modal-wrapper {
        display: table-cell;
        vertical-align: middle;
        position: relative;
    }

    .modal-container {
        margin: 0px auto;
        background-color: #fff;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
        transition: all 0.3s ease;
        max-height: 100%;
        overflow-y: auto;
    }

    .modal-enter {
        opacity: 0;
    }

    .modal-leave-active {
        opacity: 0;
    }

    .modal-enter .modal-container,
    .modal-leave-active .modal-container {
        -webkit-transform: scale(1.1);
        transform: scale(1.1);
    }
</style>