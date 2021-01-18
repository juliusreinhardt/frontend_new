<template>
    <div class="wrapper phase">
        <div class="phase__top">
            <div class="phase__top__left">
                <div>
                    <h2>Exploration</h2>
                    <p>Beschreibung</p>
                </div>
            </div>
            <div class="phase__top__right">
                <div class="phase__tags">
                    <div class="phase__tags__item">Jaskdj</div>
                    <div class="phase__tags__item">Jaskdj</div>
                    <div class="phase__tags__item">Jaskdj</div>
                    <div class="phase__tags__item">Jaskdj</div>
                    <div class="phase__tags__item">Jaskdj</div>
                    <div class="phase__tags__item">Jaskdj</div>
                    <div class="phase__tags__item">Jaskdj</div>
                    <div class="phase__tags__item">Jaskdj</div>
                </div>
            </div>
        </div>
        <div class="phase__bottom">
        </div>
    </div>
</template>

<script>
import gql from 'graphql-tag'
import homeQuery from '~/apollo/queries/home'

export default {
}
</script>

<style lang="scss" scoped>
.phase {
    scroll-snap-align: start;
    height: 100vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    &__top {
        display: flex;
        flex-flow: row;
        &__left {

        }
        &__right {

        }
    }
    &__bottom {

    }
}
</style>