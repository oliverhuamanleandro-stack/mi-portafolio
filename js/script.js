// =====================================
// MENU DE NAVEGACION
// =====================================

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");
const iconoMenu = menuBtn.querySelector("i");

// ABRIR Y CERRAR MENU

menuBtn.addEventListener("click", function () {

    navLinks.classList.toggle("active");

    const menuAbierto = navLinks.classList.contains("active");

    menuBtn.setAttribute("aria-expanded", menuAbierto);

    if (menuAbierto) {
        iconoMenu.classList.replace("fa-bars", "fa-xmark");
    } else {
        iconoMenu.classList.replace("fa-xmark", "fa-bars");
    }

});


// CERRAR MENU AL SELECCIONAR UNA SECCION

const enlacesMenu = document.querySelectorAll(".nav-link");

enlacesMenu.forEach(function (enlace) {

    enlace.addEventListener("click", function () {

        navLinks.classList.remove("active");

        menuBtn.setAttribute("aria-expanded", "false");

        iconoMenu.classList.replace("fa-xmark", "fa-bars");

    });

});


// =====================================
// CAMBIAR ENTRE MODO OSCURO Y CLARO
// =====================================

const themeBtn = document.getElementById("themeBtn");
const iconoTema = themeBtn.querySelector("i");

// Recuperar el tema guardado

let temaGuardado = localStorage.getItem("tema");

// Aplicar el tema al cargar la página

if (temaGuardado === "claro") {

    document.body.classList.add("modo-claro");

    iconoTema.classList.remove("fa-sun");
    iconoTema.classList.add("fa-moon");

    themeBtn.setAttribute("aria-label", "Cambiar a modo oscuro");

} else {

    document.body.classList.remove("modo-claro");

    iconoTema.classList.remove("fa-moon");
    iconoTema.classList.add("fa-sun");

    themeBtn.setAttribute("aria-label", "Cambiar a modo claro");

}


// CAMBIAR TEMA AL PRESIONAR EL BOTON

themeBtn.addEventListener("click", function () {

    document.body.classList.toggle("modo-claro");

    const modoClaro = document.body.classList.contains("modo-claro");

    if (modoClaro) {

        // Activar modo claro

        iconoTema.classList.remove("fa-sun");
        iconoTema.classList.add("fa-moon");

        themeBtn.setAttribute("aria-label", "Cambiar a modo oscuro");

        localStorage.setItem("tema", "claro");

    } else {

        // Activar modo oscuro

        iconoTema.classList.remove("fa-moon");
        iconoTema.classList.add("fa-sun");

        themeBtn.setAttribute("aria-label", "Cambiar a modo claro");

        localStorage.setItem("tema", "oscuro");

    }

});


// =====================================
// ANIMACIONES AL DESPLAZARSE
// =====================================

const elementosAnimados = document.querySelectorAll(".reveal");

const observador = new IntersectionObserver(

    function (entradas, observador) {

        entradas.forEach(function (entrada) {

            if (entrada.isIntersecting) {

                entrada.target.classList.add("mostrar");

                observador.unobserve(entrada.target);

            }

        });

    },

    {
        threshold: 0.12
    }

);


// ACTIVAR ANIMACIONES

elementosAnimados.forEach(function (elemento) {

    observador.observe(elemento);

});


// =====================================
// CAMBIAR SECCION ACTIVA DEL MENU
// =====================================

const secciones = document.querySelectorAll("main section[id]");

const observadorSecciones = new IntersectionObserver(

    function (entradas) {

        entradas.forEach(function (entrada) {

            if (entrada.isIntersecting) {

                const idSeccion = entrada.target.getAttribute("id");

                enlacesMenu.forEach(function (enlace) {

                    enlace.classList.remove("active");

                    if (enlace.getAttribute("href") === "#" + idSeccion) {

                        enlace.classList.add("active");

                    }

                });

            }

        });

    },

    {
        rootMargin: "-30% 0px -60% 0px"
    }

);


// OBSERVAR LAS SECCIONES

secciones.forEach(function (seccion) {

    observadorSecciones.observe(seccion);

});


// =====================================
// CERRAR MENU CON LA TECLA ESCAPE
// =====================================

document.addEventListener("keydown", function (evento) {

    if (evento.key === "Escape") {

        navLinks.classList.remove("active");

        menuBtn.setAttribute("aria-expanded", "false");

        iconoMenu.classList.replace("fa-xmark", "fa-bars");

    }

});


// =====================================
// MENSAJE EN CONSOLA
// =====================================

console.log("Portafolio de Carlos Huaman cargado correctamente.");

/* =====================================
   INFORMACION DE TODAS LAS HABILIDADES
===================================== */

const informacionHabilidades = {

    "Python": {
        descripcion: "Python es un lenguaje de programación de alto nivel, conocido por su sintaxis sencilla y facilidad de aprendizaje.",
        uso: "Se utiliza para desarrollar aplicaciones, automatizar tareas, analizar datos y crear soluciones de inteligencia artificial.",
        conocimientos: "Has utilizado Python en proyectos de detección de mascarillas y procesamiento de imágenes mediante OpenCV y TensorFlow."
    },

    "Java": {
        descripcion: "Java es un lenguaje de programación orientado a objetos que permite desarrollar aplicaciones robustas y multiplataforma.",
        uso: "Se utiliza para crear aplicaciones de escritorio, sistemas empresariales, aplicaciones web y servicios.",
        conocimientos: "Has trabajado con Java en aplicaciones de escritorio utilizando Swing y conexión con bases de datos MySQL."
    },

    "JavaScript": {
        descripcion: "JavaScript es un lenguaje de programación que permite agregar interactividad y dinamismo a las páginas web.",
        uso: "Se utiliza para validar formularios, manipular elementos HTML, crear interfaces dinámicas y desarrollar aplicaciones web.",
        conocimientos: "Has utilizado JavaScript para implementar funciones interactivas y validaciones en proyectos web."
    },

    "PHP": {
        descripcion: "PHP es un lenguaje de programación que se ejecuta principalmente en el servidor y permite desarrollar aplicaciones web dinámicas.",
        uso: "Se utiliza para procesar formularios, gestionar sesiones, conectar aplicaciones con bases de datos y crear sistemas web.",
        conocimientos: "Conoces sus fundamentos para el desarrollo de aplicaciones y funcionalidades del lado del servidor."
    },

    "SQL": {
        descripcion: "SQL es un lenguaje utilizado para consultar, insertar, actualizar y eliminar información en bases de datos relacionales.",
        uso: "Se utiliza para administrar datos, realizar consultas, crear tablas y relacionar información.",
        conocimientos: "Has trabajado con consultas SQL, creación de tablas, registros y operaciones CRUD."
    },

    "HTML5": {
        descripcion: "HTML5 es el lenguaje de marcado utilizado para estructurar el contenido de una página web.",
        uso: "Permite organizar textos, imágenes, enlaces, formularios, tablas y secciones de una página web.",
        conocimientos: "Has utilizado HTML para construir páginas web, formularios y estructuras de tus proyectos académicos."
    },

    "CSS3": {
        descripcion: "CSS3 es un lenguaje de estilos que permite definir la apariencia visual de las páginas web.",
        uso: "Se utiliza para personalizar colores, fuentes, diseños, animaciones y adaptar páginas a diferentes dispositivos.",
        conocimientos: "Has trabajado con diseños, tarjetas, formularios, distribuciones y estilos responsive."
    },

    "Bootstrap": {
        descripcion: "Bootstrap es un framework de CSS que proporciona componentes y herramientas para diseñar interfaces web.",
        uso: "Permite crear páginas responsive utilizando sistemas de cuadrículas, botones, menús, tarjetas y otros componentes.",
        conocimientos: "Conoces su utilización para agilizar la construcción y adaptación de interfaces web."
    },

    "React": {
        descripcion: "React es una biblioteca de JavaScript utilizada para construir interfaces de usuario mediante componentes reutilizables.",
        uso: "Se utiliza para desarrollar aplicaciones web interactivas, organizar interfaces y actualizar contenido dinámicamente.",
        conocimientos: "Conoces sus fundamentos como tecnología para el desarrollo de interfaces frontend."
    },

    "TensorFlow": {
        descripcion: "TensorFlow es una biblioteca de código abierto utilizada para desarrollar y entrenar modelos de aprendizaje automático.",
        uso: "Se utiliza para crear redes neuronales, reconocer patrones, clasificar imágenes y desarrollar soluciones de inteligencia artificial.",
        conocimientos: "Has utilizado TensorFlow en tu proyecto académico de detección de mascarillas."
    },

    "Keras": {
        descripcion: "Keras es una API de alto nivel que facilita la construcción, configuración y entrenamiento de redes neuronales.",
        uso: "Se utiliza para crear modelos de aprendizaje profundo de forma más sencilla y organizada.",
        conocimientos: "Conoces su aplicación en el desarrollo y entrenamiento de modelos de inteligencia artificial."
    },

    "Scikit-learn": {
        descripcion: "Scikit-learn es una biblioteca de Python que ofrece herramientas para desarrollar modelos de aprendizaje automático.",
        uso: "Se utiliza para clasificación, regresión, agrupamiento y evaluación de modelos predictivos.",
        conocimientos: "Conoces sus herramientas y aplicaciones dentro del aprendizaje automático."
    },

    "YOLO": {
        descripcion: "YOLO es una familia de modelos de visión artificial diseñada para detectar objetos en imágenes y videos.",
        uso: "Se utiliza para identificar y localizar objetos en tiempo real, como personas, vehículos y otros elementos.",
        conocimientos: "Has utilizado YOLOv8 junto con OpenCV para detectar y contar personas y vehículos en videos."
    },

    "OpenCV": {
        descripcion: "OpenCV es una biblioteca de visión artificial que permite procesar y analizar imágenes y videos.",
        uso: "Se utiliza para detectar rostros, procesar imágenes, analizar videos y trabajar con cámaras en tiempo real.",
        conocimientos: "Has trabajado con OpenCV en proyectos de detección de mascarillas y detección de personas."
    },

    "MySQL": {
        descripcion: "MySQL es un sistema de gestión de bases de datos relacionales que utiliza SQL.",
        uso: "Se utiliza para almacenar, consultar y administrar información de aplicaciones y sistemas.",
        conocimientos: "Has creado bases de datos, tablas y operaciones CRUD para proyectos desarrollados en Java."
    },

    "PostgreSQL": {
        descripcion: "PostgreSQL es un sistema de gestión de bases de datos relacionales de código abierto.",
        uso: "Se utiliza para administrar información estructurada y desarrollar aplicaciones que requieren consultas y relaciones complejas.",
        conocimientos: "Conoces sus fundamentos y su utilización para gestionar bases de datos."
    },

    "SQL Server": {
        descripcion: "SQL Server es un sistema de gestión de bases de datos desarrollado por Microsoft.",
        uso: "Se utiliza para almacenar, consultar y administrar información de sistemas empresariales y aplicaciones.",
        conocimientos: "Has trabajado con consultas SQL y fundamentos de administración de bases de datos."
    },

    "Git": {
        descripcion: "Git es un sistema de control de versiones que permite registrar y administrar los cambios realizados en el código fuente.",
        uso: "Se utiliza para mantener el historial de proyectos, recuperar versiones anteriores y trabajar de manera colaborativa.",
        conocimientos: "Conoces los fundamentos del control de versiones para organizar y mantener proyectos de programación."
    },

    "GitHub": {
        descripcion: "GitHub es una plataforma que permite alojar repositorios Git y colaborar en proyectos de software.",
        uso: "Se utiliza para compartir código, administrar repositorios y trabajar en equipo mediante herramientas de colaboración.",
        conocimientos: "Puedes utilizar repositorios para organizar y publicar tus proyectos académicos."
    },

    "VS Code": {
        descripcion: "Visual Studio Code es un editor de código fuente ligero y extensible desarrollado por Microsoft.",
        uso: "Se utiliza para escribir, editar y depurar código en diferentes lenguajes de programación.",
        conocimientos: "Lo utilizas como entorno de trabajo para desarrollar proyectos de programación y páginas web."
    },

    "NetBeans": {
        descripcion: "Apache NetBeans es un entorno de desarrollo integrado (IDE) que facilita la programación en diferentes lenguajes.",
        uso: "Se utiliza para crear, ejecutar y depurar aplicaciones, especialmente proyectos desarrollados con Java.",
        conocimientos: "Has utilizado NetBeans para desarrollar aplicaciones Java Swing y proyectos conectados a MySQL."
    },

    "Jupyter Notebook": {
        descripcion: "Jupyter Notebook es una herramienta interactiva que permite escribir y ejecutar código en bloques o celdas.",
        uso: "Se utiliza para experimentar con Python, analizar datos, realizar cálculos y desarrollar proyectos de inteligencia artificial.",
        conocimientos: "Conoces su uso para ejecutar código y trabajar con bibliotecas de análisis de datos y aprendizaje automático."
    },

    "Pandas": {
        descripcion: "Pandas es una biblioteca de Python especializada en la manipulación y análisis de datos.",
        uso: "Se utiliza para leer archivos CSV y Excel, organizar tablas, filtrar información y analizar conjuntos de datos.",
        conocimientos: "Conoces sus herramientas para trabajar con datos estructurados y archivos CSV."
    },

    "NumPy": {
        descripcion: "NumPy es una biblioteca de Python diseñada para realizar operaciones numéricas y trabajar con arreglos multidimensionales.",
        uso: "Se utiliza para cálculos matemáticos, operaciones con matrices y procesamiento eficiente de datos numéricos.",
        conocimientos: "Conoces su aplicación en proyectos de Python y procesamiento de datos."
    },

    "Procesamiento de imágenes": {
        descripcion: "El procesamiento de imágenes consiste en aplicar técnicas computacionales para analizar, modificar y extraer información visual.",
        uso: "Se utiliza para mejorar imágenes, detectar objetos, reconocer patrones y analizar información obtenida de fotografías o videos.",
        conocimientos: "Has aplicado estos conceptos utilizando Python y OpenCV en proyectos de detección de mascarillas y personas."
    }
};


/* =====================================
   FUNCIONAMIENTO DE LAS VENTANAS
===================================== */

const modalHabilidad = document.getElementById("modalHabilidad");
const cerrarModal = document.getElementById("cerrarModal");

const modalTitulo = document.getElementById("modalTitulo");
const modalDescripcion = document.getElementById("modalDescripcion");
const modalUso = document.getElementById("modalUso");
const modalConocimientos = document.getElementById("modalConocimientos");

function abrirModalHabilidad(nombre) {

    const informacion = informacionHabilidades[nombre];

    if (!informacion || !modalHabilidad) return;

    modalTitulo.textContent = nombre;
    modalDescripcion.textContent = informacion.descripcion;
    modalUso.textContent = informacion.uso;
    modalConocimientos.textContent = informacion.conocimientos;

    modalHabilidad.classList.add("activo");
    document.body.style.overflow = "hidden";

    cerrarModal.focus();
}

function cerrarModalHabilidad() {
    if (!modalHabilidad) return;

    modalHabilidad.classList.remove("activo");
    document.body.style.overflow = "";
}

// Detectar clic en cualquier tecnología
document.querySelectorAll(".tecnologia-btn").forEach(boton => {

    boton.addEventListener("click", function () {
        const tecnologia = this.dataset.tecnologia;
        abrirModalHabilidad(tecnologia);
    });

});

// Cerrar con el botón X
cerrarModal.addEventListener("click", cerrarModalHabilidad);

// Cerrar al presionar fuera de la ventana
modalHabilidad.addEventListener("click", function (evento) {

    if (evento.target === modalHabilidad) {
        cerrarModalHabilidad();
    }

});

// Cerrar al presionar Escape
document.addEventListener("keydown", function (evento) {

    if (evento.key === "Escape" &&
        modalHabilidad.classList.contains("activo")) {
        cerrarModalHabilidad();
    }

});

/* =====================================
   FORMULARIO DE CONTACTO
===================================== */

const formularioContacto = document.getElementById("formContacto");

if (formularioContacto) {

    formularioContacto.addEventListener("submit", function(evento) {

        evento.preventDefault();

        const nombre = document.getElementById("nombreContacto").value.trim();
        const correo = document.getElementById("correoContacto").value.trim();
        const asunto = document.getElementById("asuntoContacto").value.trim();
        const mensaje = document.getElementById("mensajeContacto").value.trim();

        if (!nombre || !correo || !asunto || !mensaje) {
            alert("Por favor, completa todos los campos.");
            return;
        }

        const destinatario = "huamanleandrocarlos@gmail.com";

        const asuntoCorreo = encodeURIComponent(asunto);

        const cuerpoCorreo = encodeURIComponent(
            "Hola Carlos,\n\n" +
            mensaje +
            "\n\nSaludos,\n" +
            nombre +
            "\nCorreo de contacto: " +
            correo
        );

        const enlaceGmail =
            "https://mail.google.com/mail/?view=cm&fs=1" +
            "&to=" + destinatario +
            "&su=" + asuntoCorreo +
            "&body=" + cuerpoCorreo;

        window.open(enlaceGmail, "_blank");

    });
    
}
