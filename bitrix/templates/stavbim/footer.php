<footer class="footer">
    <div class="container">
        <div class="footer__wrapper">
            <div class="footer__list-container">
                <div class="footer__logo-mobile"><img src="/design/img/footer_logo.svg" alt="StavBim"></div>
                <h4 class="footer__title">Меню сайта</h4>
                <div class="footer__list__wrapper">

                    <? $APPLICATION->IncludeComponent(
                        "bitrix:menu",
                        "main-menu-footer",
                        array(
                            "COMPONENT_TEMPLATE" => "main-menu-footer",
                            "ROOT_MENU_TYPE" => "main",
                            "MENU_CACHE_TYPE" => "N",
                            "MENU_CACHE_TIME" => "3600",
                            "MENU_CACHE_USE_GROUPS" => "Y",
                            "MENU_CACHE_GET_VARS" => array(),
                            "MAX_LEVEL" => "1",
                            "CHILD_MENU_TYPE" => "main",
                            "USE_EXT" => "N",
                            "DELAY" => "N",
                            "ALLOW_MULTI_SELECT" => "N"
                        ),
                        false
                    ); ?>

                    <? $APPLICATION->IncludeComponent(
                        "bitrix:menu",
                        "main-menu-footer-mobile",
                        array(
                            "COMPONENT_TEMPLATE" => "main-menu-footer-mobile",
                            "ROOT_MENU_TYPE" => "left",
                            "MENU_CACHE_TYPE" => "N",
                            "MENU_CACHE_TIME" => "3600",
                            "MENU_CACHE_USE_GROUPS" => "Y",
                            "MENU_CACHE_GET_VARS" => array(),
                            "MAX_LEVEL" => "1",
                            "CHILD_MENU_TYPE" => "left",
                            "USE_EXT" => "N",
                            "DELAY" => "N",
                            "ALLOW_MULTI_SELECT" => "N"
                        ),
                        false
                    ); ?>
                </div>
            </div>
            <div class="footer__logo"><img src="/design/img/footer_logo.svg" alt="StavBim"></div>
        </div>
        <div class="footer__moreinfo">
            <div class="footer__copyright"><a href="/confidentiality/index.php">Политика конфиденциальности</a></div>
            <div class="footer__date"><p>© 2023 ООО «stavbim»</p></div>
            <div class="footer__prodaction">
                <a href="https://dapsite.ru/" class="footer__prodaction-content">
                    <p>Создание сайта</p>
                    <svg width="49" height="33" viewBox="0 0 49 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd"
                              d="M47.1056 7.34699C46.5088 6.79714 45.8003 6.36156 45.0209 6.06526C44.2414 5.76895 43.4062 5.61774 42.5633 5.62031H33.9646C33.9813 7.47652 33.5537 9.31318 32.7122 10.9989C32.2286 11.8842 31.5979 12.694 30.843 13.399L30.6187 13.5889L29.1793 10.5586L27.7774 7.50239C27.9843 6.59582 27.8392 5.65092 27.3675 4.83326C26.8959 4.01559 26.1278 3.37733 25.1978 3.03031V0H22.0013V3.03031C21.0713 3.37733 20.3032 4.01559 19.8316 4.83326C19.3599 5.65092 19.2148 6.59582 19.4217 7.50239L17.9637 10.5586L15.5243 15.7818C14.5271 18.3522 14.5271 21.1627 15.5243 23.7331H17.1599L19.8984 17.8797L20.2909 17.9919C22.5947 18.5672 25.0273 18.5313 27.31 17.8883L28.3849 20.1848L30.0205 23.7504H31.6561C32.3574 22.0452 32.5855 20.2051 32.3197 18.3977C32.209 17.5133 31.9863 16.644 31.6561 15.8077V15.7645C31.9801 15.517 32.2917 15.258 32.5907 14.9875C33.0982 14.4931 33.5579 13.9587 33.9646 13.3903V21.1604H38.8808V17.448H42.5726C43.4156 17.4506 44.2507 17.2994 45.0302 17.0031C45.8097 16.7068 46.5182 16.2712 47.115 15.7213L47.3954 15.4451C48.476 14.3154 49.0489 12.8471 48.9967 11.3403C48.9446 9.83354 48.2715 8.40203 47.115 7.33835L47.1056 7.34699ZM22.8051 6.00882C22.9828 5.84478 23.2167 5.74284 23.4668 5.72042C23.7168 5.69801 23.9675 5.75652 24.1761 5.88594C24.3846 6.01536 24.538 6.20766 24.6101 6.42998C24.6821 6.6523 24.6684 6.89084 24.5711 7.10482C24.4739 7.3188 24.2992 7.49495 24.077 7.60316C23.8547 7.71136 23.5987 7.74491 23.3526 7.69807C23.1065 7.65122 22.8857 7.5269 22.7279 7.34633C22.5701 7.16577 22.485 6.94018 22.4873 6.70812C22.488 6.57178 22.519 6.43703 22.5785 6.31226C22.638 6.1875 22.7247 6.07539 22.8331 5.98292L22.8051 6.00882ZM23.5715 16.1185C22.6754 16.1193 21.7831 16.0119 20.9171 15.799H20.8704L22.1602 13.0364L23.2818 10.6277H23.5715H23.8612L24.9828 13.0364L26.2726 15.7904C25.392 16.01 24.4836 16.1203 23.5715 16.1185ZM43.6381 12.527C43.5729 12.5885 43.5009 12.6435 43.4232 12.691C43.1736 12.852 42.877 12.9393 42.5726 12.9414H38.8808V10.1183H42.5726C42.8786 10.1103 43.1799 10.1887 43.4364 10.343C43.6928 10.4974 43.8923 10.7202 44.008 10.982C44.1238 11.2437 44.1504 11.5318 44.0843 11.8078C44.0182 12.0839 43.8626 12.3348 43.6381 12.527ZM35.0862 27.2037H34.8993V32.9017H39.1893V31.7189H36.3854V30.657H38.6939V30.5448L39.0584 29.6815L39.1519 29.4484H36.348V28.4124H39.1519V27.2037H35.0862ZM25.394 27.2037H25.2071V28.4124H26.9923V32.919H28.4596V28.4124H30.0111V28.3001L30.3663 27.4368L30.4691 27.2037H25.394ZM19.2161 27.2037H19.0292V32.9017H20.4966V27.2037H19.2161ZM12.2437 29.4052C11.9514 29.3564 11.6681 29.2692 11.4026 29.1462C11.3395 29.1068 11.2896 29.0521 11.2582 28.9881C11.2269 28.9241 11.2154 28.8533 11.225 28.7836C11.217 28.7135 11.2325 28.6429 11.2692 28.5812C11.306 28.5195 11.3623 28.4696 11.4306 28.4383C11.6335 28.3686 11.8501 28.3392 12.0661 28.3519C12.3183 28.3392 12.571 28.3392 12.8232 28.3519C13.1099 28.3835 13.394 28.4325 13.6737 28.4987L13.898 28.5505V27.4541H13.7672C13.4614 27.3686 13.1489 27.3051 12.8325 27.2641C12.5234 27.2186 12.2109 27.1955 11.8979 27.1951C11.3132 27.1585 10.7317 27.3012 10.2436 27.6008C10.0463 27.7486 9.89 27.9377 9.7876 28.1524C9.6852 28.3671 9.63967 28.6012 9.65478 28.8354C9.6413 29.0615 9.68302 29.2875 9.77685 29.4968C9.87068 29.706 10.0142 29.893 10.1969 30.0441C10.6178 30.3466 11.1116 30.551 11.6362 30.6398C11.9139 30.6895 12.1838 30.7707 12.44 30.8815C12.4995 30.9074 12.5491 30.9493 12.5825 31.0016C12.6158 31.054 12.6313 31.1144 12.6269 31.175C12.6379 31.2614 12.6276 31.349 12.5969 31.4312C12.5661 31.5134 12.5157 31.5882 12.4493 31.6499C12.2556 31.7659 12.0249 31.8176 11.7951 31.7966C11.5107 31.7971 11.2265 31.7798 10.9446 31.7448C10.6548 31.7448 10.3371 31.6585 10.0099 31.5981H9.79498V32.7204H9.92583C10.2327 32.8043 10.5448 32.8706 10.8605 32.919C11.1697 32.9646 11.482 32.9905 11.7951 32.9967H11.8699C12.4432 33.0254 13.0092 32.8665 13.4681 32.5477C13.702 32.3878 13.8922 32.1797 14.0236 31.9399C14.1551 31.7 14.2241 31.4352 14.2252 31.1664C14.2239 31.1492 14.2239 31.1319 14.2252 31.1146C14.2425 30.8965 14.2032 30.6778 14.1106 30.4765C14.0179 30.2753 13.8745 30.0974 13.6924 29.9577C13.2585 29.6805 12.7639 29.4949 12.2437 29.4138V29.4052ZM12.8045 18.5703C13.8866 17.4528 14.5956 16.0699 14.8459 14.5885C15.0962 13.1071 14.8771 11.5905 14.2152 10.2215C13.5532 8.85248 12.4765 7.68965 11.1151 6.87323C9.75369 6.05681 8.16561 5.62168 6.54245 5.62031H0V21.1604H6.54245C7.65052 21.1606 8.74773 20.9586 9.77105 20.566C10.7944 20.1734 11.7236 19.5979 12.5054 18.8725L12.8045 18.5703ZM9.69217 14.8062C9.52275 15.1251 9.29867 15.4167 9.02858 15.6695C8.70167 15.9735 8.31285 16.2147 7.88455 16.3791C7.45625 16.5436 6.99694 16.6281 6.5331 16.6278H4.92553V10.1183H6.5331C7.13615 10.1161 7.72972 10.2568 8.25702 10.5272C8.78431 10.7975 9.22767 11.1883 9.54467 11.6621C9.86167 12.136 10.0417 12.6771 10.0675 13.2337C10.0933 13.7902 9.96411 14.3435 9.69217 14.8407V14.8062Z"
                              fill="currentColor"/>
                    </svg>
                </a>
            </div>
        </div>
    </div>
</footer>
<script type="text/javascript" src="//code.jquery.com/jquery-1.11.0.min.js"></script>
<script type="text/javascript" src="//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js"></script>
<script src="/design/js/script.js"></script>
</body>
</html>