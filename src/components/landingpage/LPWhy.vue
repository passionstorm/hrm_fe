<template>
    <div class="m-t-20">
        <h3 class="text-center">Human Resource Management Software Company Software</h3>
        <div id="why" class="container">
            <div>
                <h2>Approachable</h2>
                <p>Intuitive interface and very easy to use</p>
            </div>
            <div>
                <h2>Open source</h2>
                <p>Permission to use the source code, design documents, or content of the product</p>
            </div>
            <div>
                <h2>Free</h2>
                <p>If you are looking for a free software then this is the perfect choice</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'LPWhy',
}
</script>

<style scoped>
    div#why{
        display: flex;
        justify-content: center;
    }
    div#why>div{
        flex-basis: 30%;
        padding: 0 10px
    }
    div#why>div>h2, div#why>div>p{
        text-align: center;
    }
</style>

