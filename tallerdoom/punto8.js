document.addEventListener('DOMContentLoaded', function() {
    let subjectObject = {
        "Front-end": {
            "HTML": ["Links", "Images", "Tables", "Lists"],
            "CSS": ["Borders", "Margins", "Backgrounds", "Float"],
            "JavaScript": ["Variables", "Operators", "Functions", "Conditions"]
        },
        "Back-end": {
            "PHP": ["Variables", "Strings", "Arrays"],
            "SQL": ["SELECT", "UPDATE", "DELETE"]
        }
    }

    let subjectSelect = document.getElementById('subject');
    let topicSelect = document.getElementById('topic');
    let chapterSelect = document.getElementById('chapter');

    // Función para cargar las materias en el selector
    function loadSubjects() {
        for (let subject in subjectObject) {
            let option = document.createElement('option');
            option.value = subject;
            option.textContent = subject;
            subjectSelect.appendChild(option);
        }
    }

    // Función para cargar los temas según la materia seleccionada
    function loadTopics() {
        let selectedSubject = subjectSelect.value;
        topicSelect.innerHTML = '<option value="" selected="selected">Please select a topic</option>';
        chapterSelect.innerHTML = '<option value="" selected="selected">Please select a chapter</option>';
        if (selectedSubject !== '') {
            let topics = Object.keys(subjectObject[selectedSubject]);
            for (let i = 0; i < topics.length; i++) {
                let option = document.createElement('option');
                option.value = topics[i];
                option.textContent = topics[i];
                topicSelect.appendChild(option);
            }
        }
    }

    // Función para cargar los capítulos según el tema seleccionado
    function loadChapters() {
        let selectedSubject = subjectSelect.value;
        let selectedTopic = topicSelect.value;
        chapterSelect.innerHTML = '<option value="" selected="selected">Please select a chapter</option>';
        if (selectedSubject !== '' && selectedTopic !== '') {
            let chapters = subjectObject[selectedSubject][selectedTopic];
            for (let i = 0; i < chapters.length; i++) {
                let option = document.createElement('option');
                option.value = chapters[i];
                option.textContent = chapters[i];
                chapterSelect.appendChild(option);
            }
        }
    }

    // Cargar las materias al inicio
    loadSubjects();

    // Cargar los temas cuando se cambia la materia
    subjectSelect.addEventListener('change', loadTopics);

    // Cargar los capítulos cuando se cambia el tema
    topicSelect.addEventListener('change', loadChapters);
    
    // Cargar los temas al inicio
    loadTopics();
});

