<template>
    <div class="popup">
        <div class="popupContent">
        <div class="popupHeader">
            <h1>Delete</h1>
            <button @click="closePopup">
            <img src="@/assets/close.svg" alt="close" />
            </button>
        </div>
        <div class="popupBody">
            <p>Are you sure you want to delete this item?</p>
        </div>
        <div class="popupFooter">
            <button @click="closePopup">Cancel</button>
            <button @click="deleteItem">Delete</button>
        </div>
        </div>
    </div>
</template>