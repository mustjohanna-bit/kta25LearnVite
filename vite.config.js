import vituum from "Vituum";
import nunjucks from '@vituum/vite-plugin-nunjucks';

export default {
    plugins: [
        vituum(), 
        nunjucks(),
    ]
}