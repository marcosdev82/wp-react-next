<?php
function wp_mais_react_scripts() {
    wp_enqueue_script('wp-mais-react-app', get_template_directory_uri() . '/build/index.js', array('wp-element'), '1.0.0', true);
    wp_enqueue_style('wp-mais-react-style', get_stylesheet_uri());
}
add_action('wp_enqueue_scripts', 'wp_mais_react_scripts');