import javascriptLogo from '../assets/javascript.svg';
import phpLogo from '../assets/php.svg';
import pythonLogo from '../assets/python.svg';
import cppLogo from '../assets/c-plusplus.svg';
import javaLogo from '../assets/java.svg';
import laravelLogo from '../assets/laravel.svg';
import vueLogo from '../assets/vue.svg';

const programming_languages = [
  {
    name: 'Javascript',
    logo: javascriptLogo,
    link: 'https://www.javascript.com/',
    class_for_logo: "javascript",
    class_for_name: "javascript-name"
  },
  {
    name: 'PHP',
    logo: phpLogo,
    link: 'https://www.php.net/',
    class_for_logo: "php",
    class_for_name: "php-name"
  },
  {
    name: 'Python',
    logo: pythonLogo,
    link: 'https://www.python.org/',
    class_for_logo: "python",
    class_for_name: "python-name"
  },
  {
    name: 'C++',
    logo: cppLogo,
    link: 'https://isocpp.org/',
    class_for_logo: "cplusplus",
    class_for_name: "cplusplus-name"
  },
  {
    name: 'Java',
    logo: javaLogo,
    link: 'https://java.com/',
    class_for_logo: "java",
    class_for_name: "java-name"
  },
]

const frameworks = [
  {
    name: 'Laravel',
    logo: laravelLogo,
    link: 'https://laravel.com/',
    class_for_logo: "laravel",
    class_for_name: "laravel-name"
  },
  {
    name: 'Vue',
    logo: vueLogo,
    link: 'https://vuejs.org/',
    class_for_logo: "vue",
    class_for_name: "vue-name"
  }
]

export { programming_languages, frameworks };
