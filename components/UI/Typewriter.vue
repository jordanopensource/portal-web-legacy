<template>
    <p>
        <span ref="typedText" class="typed-text"></span>
        <span ref="cursor" class="cursor">&nbsp;</span>
    </p>
</template>

<script>
    export default {
        name: 'Typewriter',
        data() {
            return {
                textArrayIndex: 0,
                charIndex: 0,
                cursorSpan: null,
                typedTextSpan: null
            };
        },
        props: {
            typeDelay: {
                type: Number,
                default: 120
            },
            eraseDelay: {
                type: Number,
                default: 50
            },
            newDelay: {
                type: Number,
                default: 2000
            },
            textArray: {
                type: Array,
                default: []
            }
        },
        computed: {
            typingDelay() {
                return this.typeDelay
            },
            erasingDelay() {
                return this.eraseDelay
            },
            newTextDelay() {
                return this.newDelay
            },
        },
        mounted() {
            this.typedTextSpan = this.$refs.typedText
            this.cursorSpan = this.$refs.cursor
            if (this.textArray.length) {
                setTimeout(this.type, this.newTextDelay + 250)
            }
        },
        methods: {
            type() {
                if (this.charIndex < this.textArray[this.textArrayIndex].length) {
                    if (!this.cursorSpan.classList.contains("typing")) {
                        this.cursorSpan.classList.add("typing")
                    }
                    this.typedTextSpan.textContent += this.textArray[this.textArrayIndex].charAt(this.charIndex)
                    this.charIndex++
                    setTimeout(this.type, this.typingDelay)
                } else {
                    this.cursorSpan.classList.remove("typing")
                    setTimeout(this.erase, this.newTextDelay)
                }
            },
            erase() {
                if (this.charIndex > 0) {
                    if (!this.cursorSpan.classList.contains("typing")) {
                        this.cursorSpan.classList.add("typing")
                    };
                    this.typedTextSpan.textContent = this.textArray[this.textArrayIndex].substring(0, this.charIndex -
                        1);
                    this.charIndex--;
                    setTimeout(this.erase, this.erasingDelay);
                } else {
                    this.cursorSpan.classList.remove("typing");
                    this.textArrayIndex++;
                    if (this.textArrayIndex >= this.textArray.length) {
                        this.textArrayIndex = 0
                    };
                    setTimeout(this.type, this.typingDelay + 1100);
                }
            }
        }
    }
</script>
<style scoped>
    span.cursor {
        display: inline-block;
        background-color: #3897c0;
        margin-left: 0.1rem;
        width: 3px;
        animation: blink 1s infinite;
    }

    span.cursor.typing {
        animation: none;
    }

    @keyframes blink {
        0% {
            background-color: #3897c0;
        }

        49% {
            background-color: #3897c0;
        }

        50% {
            background-color: transparent;
        }

        99% {
            background-color: transparent;
        }

        100% {
            background-color: #3897c0;
        }
    }
</style>