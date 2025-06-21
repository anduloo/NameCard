// Excel文件处理相关功能

// 处理Excel文件上传
function handleFixedExcelFile(event) {
    const file = event.target.files[0];
    if (!file) {
        console.warn('未选择文件');
        return;
    }
    
    // 显示文件名
    const fileNameDisplay = document.getElementById('fileNameDisplay');
    if (fileNameDisplay) fileNameDisplay.textContent = file.name;
    
    // 读取Excel文件
    const reader = new FileReader();
    reader.onload = function(e) {
        const data = new Uint8Array(e.target.result);
        const workbook = XLSX.read(data, {type: 'array'});
        
        // 获取第一个工作表
        const firstSheet = workbook.Sheets[workbook.SheetNames[0]];
        const jsonData = XLSX.utils.sheet_to_json(firstSheet, {header: 1, defval: ''});
        
        // 存储数据到全局变量
        window.excelData = processExcelData(jsonData);
        
        // 初始化列选择器
        initColumnSelectors(window.excelData);
        
        // 显示数据预览
        showDataPreview(window.excelData);
    };
    
    reader.readAsArrayBuffer(file);
}

// 处理Excel数据的工具函数
function processExcelData(jsonData) {
    // 处理空数据
    if (!jsonData || jsonData.length === 0) {
        return [[],[]];
    }
    
    // 计算最大列数
    let maxCols = 0;
    jsonData.forEach(row => {
        if (row.length > maxCols) maxCols = row.length;
    });
    
    // 确保每一行都有相同的列数
    const processedData = jsonData.map(row => {
        // 如果行长度不足，用空字符串填充
        const paddedRow = [...row];
        while (paddedRow.length < maxCols) {
            paddedRow.push('');
        }
        return paddedRow;
    });
    
    // 确保第一行（表头）存在并处理为默认表头
    if (processedData.length === 0) {
        // 如果没有数据，创建一个空行
        const headers = [];
        for (let i = 0; i < maxCols; i++) {
            headers.push(`列${i+1}`);
        }
        processedData.push(headers);
    } else {
        // 对表头行进行处理
        for (let i = 0; i < maxCols; i++) {
            // 如果表头单元格为空，使用列号替代
            if (!processedData[0][i]) {
                processedData[0][i] = `列${i+1}`;
            }
        }
    }
    
    return processedData;
}

// 初始化列选择器
function initColumnSelectors(jsonData) {
    if (!jsonData || jsonData.length < 1) {
        console.warn('数据为空，无法初始化列选择器');
        return;
    }
    
    // 获取表头行
    const headers = jsonData[0];
    
    // 获取所有列选择器
    const selects = document.querySelectorAll('.column-select');
    
    selects.forEach((select, selectIndex) => {
        // 清除现有选项
        select.innerHTML = '';
        
        // 添加默认选项
        const defaultOption = document.createElement('option');
        defaultOption.value = '';
        defaultOption.textContent = '请选择列';
        select.appendChild(defaultOption);
        
        // 添加列选项 - 确保所有列都被添加
        for (let i = 0; i < headers.length; i++) {
            const option = document.createElement('option');
            option.value = i;
            option.textContent = headers[i] || `列${i+1}`;
            select.appendChild(option);
        }
    });
}

// 显示数据预览
function showDataPreview(jsonData) {
    const previewContainer = document.getElementById('previewContainer');
    const previewTable = document.getElementById('previewTable');
    
    if (!previewContainer || !previewTable) {
        return;
    }
    
    // 清空预览表格
    previewTable.innerHTML = '';
    
    // 最多显示前10行数据
    const displayRows = Math.min(jsonData.length, 10);
    
    // 创建表格内容
    for (let i = 0; i < displayRows; i++) {
        const row = jsonData[i];
        const tr = document.createElement('tr');
        
        // 判断是否为表头行
        if (i === 0) {
            row.forEach(cell => {
                const th = document.createElement('th');
                th.textContent = cell || '';
                tr.appendChild(th);
            });
        } else {
            row.forEach(cell => {
                const td = document.createElement('td');
                td.textContent = cell || '';
                tr.appendChild(td);
            });
        }
        
        previewTable.appendChild(tr);
    }
    
    // 显示预览容器
    previewContainer.style.display = 'block';
}

// 从选择器获取选中的列索引
function getSelectedColumnIndex(selectorId) {
    const selector = document.getElementById(selectorId);
    if (!selector || !selector.value) {
        return -1;
    }
    
    const colIndex = parseInt(selector.value);
    return colIndex;
}