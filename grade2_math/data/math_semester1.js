// 二年级数学 - 上学期计算配置
// 沪教版 - 上册核心计算知识点

const mathSemester1 = {
    // 学期信息
    semester: 1,
    semesterName: '上学期',
    
    // 计算类型配置
    calculationTypes: [
        {
            id: 'addition_within_100',
            name: '100以内加法',
            icon: '➕',
            description: '两位数加法练习',
            difficulty: 'easy',
            config: {
                type: 'addition',
                range: { min: 0, max: 100 },
                operandCount: 2,
                allowCarry: true,  // 允许进位
                resultMax: 100
            }
        },
        {
            id: 'subtraction_within_100',
            name: '100以内减法',
            icon: '➖',
            description: '两位数减法练习（含退位）',
            difficulty: 'medium',
            config: {
                type: 'subtraction',
                range: { min: 0, max: 100 },
                operandCount: 2,
                allowBorrow: true,  // 允许退位
                allowNegative: false  // 不允许负数结果
            }
        },
        {
            id: 'mixed_add_sub',
            name: '加减混合运算',
            icon: '➕➖',
            description: '连加、连减或加减混合',
            difficulty: 'medium',
            config: {
                type: 'mixed_add_sub',
                range: { min: 0, max: 100 },
                operandCount: 3,  // 3个数的运算
                operations: ['addition', 'subtraction'],
                allowNegative: false
            }
        },
        {
            id: 'multiplication_table',
            name: '表内乘法',
            icon: '✖️',
            description: '1-9的乘法口诀练习',
            difficulty: 'medium',
            config: {
                type: 'multiplication',
                range: { min: 1, max: 9 },
                operandCount: 2,
                includeCommutative: true  // 包含交换律（如 2×3 和 3×2）
            }
        },
        {
            id: 'multiplication_mixed',
            name: '乘加乘减',
            icon: '✖️➕',
            description: '乘法与加减法混合运算',
            difficulty: 'hard',
            config: {
                type: 'multiplication_mixed',
                multiplicationRange: { min: 1, max: 9 },
                addSubRange: { min: 1, max: 20 },
                operations: ['multiply_then_add', 'multiply_then_subtract']
                // 例如：5×4+3  或  6×4-2
            }
        },
        {
            id: 'money_calculation',
            name: '人民币计算',
            icon: '💰',
            description: '元、角、分换算与计算',
            difficulty: 'medium',
            config: {
                type: 'money',
                operations: ['addition', 'subtraction', 'conversion'],
                maxYuan: 100,
                includeJiao: true,
                includeFen: true
                // 例如：5元3角 + 2元8角
                //      1元 = 10角，1角 = 10分
            }
        }
    ],
    
    // 题目数量选项
    questionCountOptions: [10, 20, 30, 50],
    
    // 难度级别定义
    difficultyLevels: {
        easy: {
            name: '简单',
            color: '#4ade80',
            icon: '🌱'
        },
        medium: {
            name: '中等',
            color: '#fbbf24',
            icon: '🌟'
        },
        hard: {
            name: '困难',
            color: '#f87171',
            icon: '🔥'
        }
    }
};

// 题目生成器
class MathQuestionGenerator {
    constructor(config) {
        this.config = config;
    }
    
    // 生成单个题目
    generate() {
        const { type } = this.config;
        
        switch(type) {
            case 'addition':
                return this.generateAddition();
            case 'subtraction':
                return this.generateSubtraction();
            case 'multiplication':
                return this.generateMultiplication();
            case 'mixed_add_sub':
                return this.generateMixedAddSub();
            case 'multiplication_mixed':
                return this.generateMultiplicationMixed();
            case 'money':
                return this.generateMoney();
            default:
                return null;
        }
    }
    
    // 加法题生成
    generateAddition() {
        const { range, resultMax } = this.config;
        let a, b, result;
        
        do {
            a = this.randomInt(range.min, range.max);
            b = this.randomInt(range.min, range.max);
            result = a + b;
        } while (result > resultMax);
        
        return {
            question: `${a} + ${b} = ?`,
            answer: result,
            operands: [a, b],
            operator: '+',
            steps: this.getAdditionSteps(a, b)
        };
    }
    
    // 减法题生成
    generateSubtraction() {
        const { range, allowNegative } = this.config;
        let a, b, result;
        
        do {
            a = this.randomInt(range.min, range.max);
            b = this.randomInt(range.min, a); // 确保 b <= a
            result = a - b;
        } while (!allowNegative && result < 0);
        
        return {
            question: `${a} - ${b} = ?`,
            answer: result,
            operands: [a, b],
            operator: '-',
            steps: this.getSubtractionSteps(a, b)
        };
    }
    
    // 乘法题生成
    generateMultiplication() {
        const { range } = this.config;
        const a = this.randomInt(range.min, range.max);
        const b = this.randomInt(range.min, range.max);
        
        return {
            question: `${a} × ${b} = ?`,
            answer: a * b,
            operands: [a, b],
            operator: '×',
            hint: `${a}×${b} 或 ${b}×${a}（乘法口诀）`
        };
    }
    
    // 加减混合运算生成
    generateMixedAddSub() {
        const { range, operandCount } = this.config;
        const numbers = [];
        const operators = [];
        
        // 生成第一个数
        let current = this.randomInt(range.min, range.max);
        numbers.push(current);
        
        // 生成后续的数和运算符
        for (let i = 1; i < operandCount; i++) {
            const op = Math.random() < 0.5 ? '+' : '-';
            operators.push(op);
            
            let next;
            if (op === '-') {
                // 减法时确保不出现负数
                next = this.randomInt(1, current);
                current = current - next;
            } else {
                next = this.randomInt(1, range.max - current);
                current = current + next;
            }
            numbers.push(next);
        }
        
        // 构建题目字符串
        let questionStr = numbers[0].toString();
        for (let i = 0; i < operators.length; i++) {
            questionStr += ` ${operators[i]} ${numbers[i + 1]}`;
        }
        
        return {
            question: `${questionStr} = ?`,
            answer: this.calculateMixed(numbers, operators),
            operands: numbers,
            operators: operators,
            hint: '从左往右依次计算'
        };
    }
    
    // 乘加乘减生成
    generateMultiplicationMixed() {
        const { multiplicationRange, addSubRange } = this.config;
        const a = this.randomInt(multiplicationRange.min, multiplicationRange.max);
        const b = this.randomInt(multiplicationRange.min, multiplicationRange.max);
        const c = this.randomInt(addSubRange.min, addSubRange.max);
        const op = Math.random() < 0.5 ? '+' : '-';
        
        const multiResult = a * b;
        const finalResult = op === '+' ? multiResult + c : multiResult - c;
        
        return {
            question: `${a} × ${b} ${op} ${c} = ?`,
            answer: finalResult,
            operands: [a, b, c],
            operators: ['×', op],
            hint: '先算乘法，再算加减'
        };
    }
    
    // 人民币计算生成
    generateMoney() {
        const type = Math.random();
        
        if (type < 0.4) {
            // 换算题
            return this.generateMoneyConversion();
        } else {
            // 加减法
            return this.generateMoneyCalculation();
        }
    }
    
    generateMoneyConversion() {
        const types = ['yuan_to_jiao', 'jiao_to_fen', 'mixed_conversion'];
        const convType = types[Math.floor(Math.random() * types.length)];
        
        switch(convType) {
            case 'yuan_to_jiao':
                const yuan = this.randomInt(1, 10);
                return {
                    question: `${yuan}元 = ( )角`,
                    answer: yuan * 10,
                    hint: '1元 = 10角'
                };
            case 'jiao_to_fen':
                const jiao = this.randomInt(1, 10);
                return {
                    question: `${jiao}角 = ( )分`,
                    answer: jiao * 10,
                    hint: '1角 = 10分'
                };
            case 'mixed_conversion':
                const y = this.randomInt(1, 10);
                const j = this.randomInt(1, 9);
                return {
                    question: `${y}元${j}角 = ( )角`,
                    answer: y * 10 + j,
                    hint: '先把元换成角，再加上角'
                };
        }
    }
    
    generateMoneyCalculation() {
        const yuan1 = this.randomInt(1, 50);
        const jiao1 = this.randomInt(0, 9);
        const yuan2 = this.randomInt(1, 50);
        const jiao2 = this.randomInt(0, 9);
        const op = Math.random() < 0.5 ? '+' : '-';
        
        const totalJiao1 = yuan1 * 10 + jiao1;
        const totalJiao2 = yuan2 * 10 + jiao2;
        
        let resultJiao;
        if (op === '+') {
            resultJiao = totalJiao1 + totalJiao2;
        } else {
            // 确保不出现负数
            if (totalJiao1 < totalJiao2) {
                [yuan1, jiao1, yuan2, jiao2] = [yuan2, jiao2, yuan1, jiao1];
                resultJiao = (yuan2 * 10 + jiao2) - (yuan1 * 10 + jiao1);
            } else {
                resultJiao = totalJiao1 - totalJiao2;
            }
        }
        
        const resultYuan = Math.floor(resultJiao / 10);
        const resultJiaoRemainder = resultJiao % 10;
        
        const money1Str = jiao1 > 0 ? `${yuan1}元${jiao1}角` : `${yuan1}元`;
        const money2Str = jiao2 > 0 ? `${yuan2}元${jiao2}角` : `${yuan2}元`;
        const answerStr = resultJiaoRemainder > 0 ? 
            `${resultYuan}元${resultJiaoRemainder}角` : `${resultYuan}元`;
        
        return {
            question: `${money1Str} ${op} ${money2Str} = ?`,
            answer: answerStr,
            numericAnswer: resultJiao,
            hint: '可以先都换成角来计算'
        };
    }
    
    // 辅助方法：生成随机整数
    randomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    
    // 辅助方法：计算混合运算结果
    calculateMixed(numbers, operators) {
        let result = numbers[0];
        for (let i = 0; i < operators.length; i++) {
            if (operators[i] === '+') {
                result += numbers[i + 1];
            } else {
                result -= numbers[i + 1];
            }
        }
        return result;
    }
    
    // 加法步骤提示
    getAdditionSteps(a, b) {
        const tensA = Math.floor(a / 10);
        const onesA = a % 10;
        const tensB = Math.floor(b / 10);
        const onesB = b % 10;
        
        const onesSum = onesA + onesB;
        const carry = onesSum >= 10 ? 1 : 0;
        
        if (carry === 0) {
            return [
                `个位：${onesA} + ${onesB} = ${onesSum}`,
                `十位：${tensA} + ${tensB} = ${tensA + tensB}`,
                `答案：${a + b}`
            ];
        } else {
            return [
                `个位：${onesA} + ${onesB} = ${onesSum}（向十位进1）`,
                `十位：${tensA} + ${tensB} + 1 = ${tensA + tensB + 1}`,
                `答案：${a + b}`
            ];
        }
    }
    
    // 减法步骤提示
    getSubtractionSteps(a, b) {
        const tensA = Math.floor(a / 10);
        const onesA = a % 10;
        const tensB = Math.floor(b / 10);
        const onesB = b % 10;
        
        const borrow = onesA < onesB ? 1 : 0;
        
        if (borrow === 0) {
            return [
                `个位：${onesA} - ${onesB} = ${onesA - onesB}`,
                `十位：${tensA} - ${tensB} = ${tensA - tensB}`,
                `答案：${a - b}`
            ];
        } else {
            return [
                `个位：${onesA}不够减${onesB}，从十位借1`,
                `个位：${onesA + 10} - ${onesB} = ${onesA + 10 - onesB}`,
                `十位：${tensA - 1} - ${tensB} = ${tensA - 1 - tensB}`,
                `答案：${a - b}`
            ];
        }
    }
}

// 导出数据
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { mathSemester1, MathQuestionGenerator };
}
