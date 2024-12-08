const tagsInfo = {
    h: {
        description: "تُستخدم لكتابة العناوين الكبيرة.",
        example: `<h1> Hello World!</h1>`,
        attributes: {
            "class": "تُستخدم لتطبيق CSS.",
            "id": "تحديد هوية العنصر."
        }
    },
    p: {
        description: "تُستخدم لكتابة الفقرات.",
        example: `<p>enter your paragraph</p>`,
        attributes: {
            "class": "تُستخدم لتطبيق CSS.",
            "id": "تحديد هوية العنصر."
        }
    },
    img: {
        description: "تُستخدم لإضافة الصور.",
        example: `<img src="https://via.placeholder.com/150" alt="صورة افتراضية" width="150" height="100">`,
        attributes: {
            "src": "رابط الصورة.",
            "alt": "النص البديل.",
            "width": "عرض الصورة.",
            "height": "ارتفاع الصورة."
        }
    },
    ul: {
        description: "قائمة غير مرتبة.",
        example: `<ul><li>prodact 1</li><li>prodact 2</li></ul>`,
        attributes: {
            "type": "نوع الرمز (مثل دائرة أو مربع)."
        }
    },
    ol: {
        description: "قائمة مرتبة.",
        example: `<ol><li>one</li><li>two</li></ol>`,
        attributes: {
            "start": "تحديد الرقم الذي تبدأ منه القائمة.",
            "reversed": "عرض العناصر بشكل تنازلي."
        }
    },
    table: {
        description: "تُستخدم لإنشاء الجداول.",
        example: `
            <table border="1">
                <tr>
                    <th>name</th>
                    <th>age</th>
                </tr>
                <tr>
                    <td>Ahmed</td>
                    <td>20</td>
                </tr>
            </table>
        `,
        attributes: {
            "border": "عرض حدود الجدول.",
            "cellpadding": "المسافة الداخلية للخلية.",
            "cellspacing": "المسافة بين الخلايا."
        }
    },
    form: {
        description: "تُستخدم لإنشاء النماذج.",
        example: `
            <form>
                <label for="name">name:</label>
                <input type="text" id="name" name="name"><br>
                <input type="submit" value="إرسال">
            </form>
        `,
        attributes: {
            "action": "الوجهة التي يتم إرسال النموذج إليها.",
            "method": "طريقة الإرسال (GET أو POST)."
        }
    },
    a: {
        description: "تُستخدم لإنشاء روابط تنقل المستخدم لصفحات أو أقسام أخرى.",
        example: '<a href="https://example.com">Click me! </a>',
        attributes: {
            "href": "عنوان الرابط (وجهة الانتقال).",
            "target": "_blank لفتح الرابط في نافذة جديدة.",
            "title": "نص يظهر عند مرور الفأرة على الرابط.",
            "rel": "لتحديد العلاقة بين الصفحة الحالية والرابط (مثلاً: noreferrer)."
        }
    },
    button: {
        description: "تُستخدم لإنشاء الأزرار.",
        example: `<button>اضغط هنا</button>`,
        attributes: {
            "type": "تحديد نوع الزر (submit, button, reset).",
            "onclick": "تحديد حدث عند النقر."
        }
    },
    input: {
        description: "تُستخدم لإنشاء الحقول القابلة للإدخال.",
        example: `<input type="text" placeholder="Enter Your Text">`,
        attributes: {
            "type": "نوع المدخل (text, password, submit).",
            "placeholder": "نص مساعدة يظهر داخل الحقل."
        }
    }
};

function showTag(tag) {
    const tagInfo = tagsInfo[tag];
    const content = document.getElementById("content");
    const attributesList = Object.entries(tagInfo.attributes || {})
        .map(([attr, desc]) => `<li><strong>${attr}:</strong> ${desc}</li>`)
        .join("");

    content.innerHTML = `
        <h2>${tag.toUpperCase()}</h2>
        <p>${tagInfo.description}</p>
        <h3>مثال:</h3>
        <pre><code class="language-html">${tagInfo.example.trim()}</code></pre>
        <h3>الخصائص:</h3>
        <ul>${attributesList || "لا توجد خصائص معروفة لهذا التاج."}</ul>
    `;
    Prism.highlightAll();
    document.getElementById("editor").value = tagInfo.example.trim();
    resetPreview(); // إعادة تعيين المعاينة عند تغيير التاج
}

function runCode() {
    const htmlCode = document.getElementById("editor").value;
    const cssCode = document.getElementById("css-code").value;
    const preview = document.getElementById("preview");
    preview.innerHTML = htmlCode;
    preview.firstElementChild.style.cssText = cssCode; // تطبيق CSS على العنصر الأول
}

function resetPreview() {
    document.getElementById("preview").innerHTML = ""; // إعادة تعيين المعاينة
}
