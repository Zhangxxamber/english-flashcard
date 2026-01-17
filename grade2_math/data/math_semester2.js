// 二年级数学 - 下学期计算配置
// 沪教版 - 下册核心计算知识点

const mathSemester2 = {
    // 学期信息
    semester: 2,
    semesterName: '下学期',
    
    // 计算类型配置
    calculationTypes: [
        {
            id: 'division_table',
            name: '表内除法',
            icon: '➗',
            description: '用口诀求商（1-9）',
            difficulty: 'medium',
            config: {
                type: 'division',
                range: { min: 1, max: 9 },
                divisorRange: { min: 1, max: 9 },
                allowRemainder: false  // 不包含余数
            }
        },
        {
            id: 'division_with_remainder',
            name: '有余数的除法',
            icon: '➗📦',
            description: '除法运算（含余数）',
            difficulty: 'hard',
            config: {
                type: 'division_remainder',
                dividendMax: 81,  // 被除数最大值
                divisorRange: { min: 2, max: 9 },
                allowRemainder: true,  // 包含余数
                ensureRemainder: true  // 确保有余数
            }
        },
        {
            id: 'mixed_mul_div',
            name: '乘除混合运算',
            icon: '✖️➗',
            description: '乘法和除法混合',
            difficulty: 'hard',
            config: {
                type: 'mixed_mul_div',
                range: { min: 1, max: 9 },
                operandCount: 3,
                operations: ['multiplication', 'division']
            }
        },
        {
            id: 'mixed_four_operations',
            name: '四则混合运算',
            icon: '➕➖✖️➗',
            description: '加减乘除综合',
            difficulty: 'hard',
            config: {
                type: 'mixed_all',
                range: { min: 1, max: 100 },
                multiplicationRange: { min: 1, max: 9 },
                includeParentheses: false  // 暂不包含括号
            }
        },
        {
            id: 'three_digit_addition',
            name: '三位数加法',
            icon: '➕💯',
            description: '三位数加法（含进位）',
            difficulty: 'medium',
            config: {
                type: 'addition',
                range: { min: 100, max: 999 },
                operandCount: 2,
                allowCarry: true,
                resultMax: 1999
            }
        },
        {
            id: 'three_digit_subtraction',
            name: '三位数减法',
            icon: '➖💯',
            description: '三位数减法（含退位）',
            difficulty: 'medium',
            config: {
                type: 'subtraction',
                range: { min: 100, max: 999 },
                operandCount: 2,
                allowBorrow: true,
                allowNegative: false
            }
        },
        {
            id: 'number_recognition',
            name: '万以内数的认识',
            icon: '🔢',
            description: '读数、写数、比较大小',
            difficulty: 'easy',
            config: {
                type: 'number_recognition',
                range: { min: 1000, max: 10000 },
                questionTypes: ['read', 'write', 'compare', 'find_neighbor']
            }
        },
        {
            id: 'time_calculation',
            name: '时间计算',
            icon: '⏰',
            description: '时、分、秒的换算与计算',
            difficulty: 'medium',
            config: {
                type: 'time',
                operations: ['conversion', 'addition', 'subtraction'],
                maxHour: 12,
                includeSeconds: true
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

// 下学期题目生成器扩展
class MathQuestionGeneratorS2 extends MathQuestionGenerator {
    
    // 除法题生成（无余数）
    generateDivision() {
        const { range, divisorRange } = this.config;
        const divisor = this.randomInt(divisorRange.min, divisorRange.max);
        const quotient = this.randomInt(range.min, range.max);
        const dividend = divisor * quotient;
        
        return {
            question: `${dividend} ÷ ${divisor} = ?`,
            answer: quotient,
            dividend: dividend,
            divisor: divisor,
            operator: '÷',
            hint: `想一想：${divisor} × ( ) = ${dividend}`
        };
    }
    
    // 有余数的除法生成
    generateDivisionWithRemainder() {
        const { dividendMax, divisorRange } = this.config;
        const divisor = this.randomInt(divisorRange.min, divisorRange.max);
        const quotient = this.randomInt(1, Math.floor(dividendMax / divisor));
        const remainder = this.randomInt(1, divisor - 1);  // 余数必须小于除数
        const dividend = divisor * quotient + remainder;
        
        return {
            question: `${dividend} ÷ ${divisor} = ? ... ?`,
            answer: `${quotient}余${remainder}`,
            quotient: quotient,
            remainder: remainder,
            dividend: dividend,
            divisor: divisor,
            operator: '÷',
            hint: `余数必须比除数${divisor}小`,
            steps: [
                `${dividend} ÷ ${divisor}`,
                `商是 ${quotient}`,
                `${divisor} × ${quotient} = ${divisor * quotient}`,
                `${dividend} - ${divisor * quotient} = ${remainder}`,
                `答案：${quotient} 余 ${remainder}`
            ]
        };
    }
    
    // 乘除混合运算
    generateMixedMulDiv() {
        const { range } = this.config;
        const type = Math.random();
        
        if (type < 0.5) {
            // 先乘后除：a × b ÷ c
            const a = this.randomInt(range.min, range.max);
            const b = this.randomInt(range.min, range.max);
            const product = a * b;
            // 选择能整除的除数
            const divisors = this.getDivisors(product, range.max);
            const c = divisors[Math.floor(Math.random() * divisors.length)];
            
            return {
                question: `${a} × ${b} ÷ ${c} = ?`,
                answer: product / c,
                operands: [a, b, c],
                operators: ['×', '÷'],
                hint: '从左往右依次计算'
            };
        } else {
            // 先除后乘：a ÷ b × c
            const b = this.randomInt(range.min, range.max);
            const quotient = this.randomInt(range.min, range.max);
            const a = b * quotient;
            const c = this.randomInt(range.min, range.max);
            
            return {
                question: `${a} ÷ ${b} × ${c} = ?`,
                answer: quotient * c,
                operands: [a, b, c],
                operators: ['÷', '×'],
                hint: '从左往右依次计算'
            };
        }
    }
    
    // 四则混合运算
    generateMixedAll() {
        const type = Math.random();
        
        if (type < 0.5) {
            // 乘法 + 加减法：a × b ± c
            const a = this.randomInt(2, 9);
            const b = this.randomInt(2, 9);
            const c = this.randomInt(1, 20);
            const op = Math.random() < 0.5 ? '+' : '-';
            const product = a * b;
            const result = op === '+' ? product + c : product - c;
            
            return {
                question: `${a} × ${b} ${op} ${c} = ?`,
                answer: result,
                hint: '先算乘法，再算加减'
            };
        } else {
            // 除法 + 加减法：a ÷ b ± c
            const b = this.randomInt(2, 9);
            const quotient = this.randomInt(2, 9);
            const a = b * quotient;
            const c = this.randomInt(1, 20);
            const op = Math.random() < 0.5 ? '+' : '-';
            const result = op === '+' ? quotient + c : quotient - c;
            
            return {
                question: `${a} ÷ ${b} ${op} ${c} = ?`,
                answer: result,
                hint: '先算除法，再算加减'
            };
        }
    }
    
    // 万以内数的认识
    generateNumberRecognition() {
        const { range, questionTypes } = this.config;
        const qType = questionTypes[Math.floor(Math.random() * questionTypes.length)];
        
        switch(qType) {
            case 'read':
                // 读数题
                const num1 = this.randomInt(range.min, range.max);
                return {
                    question: `读出这个数：${num1}`,
                    answer: this.numberToChinese(num1),
                    isTextAnswer: true,
                    hint: '从高位读到低位'
                };
                
            case 'write':
                // 写数题
                const num2 = this.randomInt(range.min, range.max);
                const chinese = this.numberToChinese(num2);
                return {
                    question: `写出这个数：${chinese}`,
                    answer: num2,
                    hint: '注意0的读写规则'
                };
                
            case 'compare':
                // 比较大小
                const num3 = this.randomInt(range.min, range.max);
                const num4 = this.randomInt(range.min, range.max);
                let compareAnswer;
                if (num3 > num4) compareAnswer = '>';
                else if (num3 < num4) compareAnswer = '<';
                else compareAnswer = '=';
                
                return {
                    question: `比较大小：${num3} ( ) ${num4}`,
                    answer: compareAnswer,
                    isTextAnswer: true,
                    hint: '位数多的数大，位数相同从高位比起'
                };
                
            case 'find_neighbor':
                // 找相邻数
                const num5 = this.randomInt(range.min + 100, range.max - 100);
                const neighborType = Math.random();
                if (neighborType < 0.33) {
                    return {
                        question: `${num5}的前一个数是 ( )`,
                        answer: num5 - 1
                    };
                } else if (neighborType < 0.66) {
                    return {
                        question: `${num5}的后一个数是 ( )`,
                        answer: num5 + 1
                    };
                } else {
                    return {
                        question: `${num5}的相邻整百数是 ( ) 和 ( )`,
                        answer: `${Math.floor(num5 / 100) * 100}和${Math.ceil(num5 / 100) * 100}`,
                        isTextAnswer: true
                    };
                }
        }
    }
    
    // 时间计算
    generateTime() {
        const type = Math.random();
        
        if (type < 0.4) {
            // 换算题
            return this.generateTimeConversion();
        } else {
            // 时间加减法
            return this.generateTimeCalculation();
        }
    }
    
    generateTimeConversion() {
        const convTypes = ['hour_to_min', 'min_to_sec', 'mixed'];
        const convType = convTypes[Math.floor(Math.random() * convTypes.length)];
        
        switch(convType) {
            case 'hour_to_min':
                const hour = this.randomInt(1, 5);
                return {
                    question: `${hour}小时 = ( )分`,
                    answer: hour * 60,
                    hint: '1小时 = 60分'
                };
            case 'min_to_sec':
                const min = this.randomInt(1, 10);
                return {
                    question: `${min}分 = ( )秒`,
                    answer: min * 60,
                    hint: '1分 = 60秒'
                };
            case 'mixed':
                const h = this.randomInt(1, 3);
                const m = this.randomInt(1, 59);
                return {
                    question: `${h}小时${m}分 = ( )分`,
                    answer: h * 60 + m,
                    hint: '先把小时换成分，再加上分'
                };
        }
    }
    
    generateTimeCalculation() {
        const hour1 = this.randomInt(1, 10);
        const min1 = this.randomInt(0, 59);
        const hour2 = this.randomInt(0, 5);
        const min2 = this.randomInt(0, 59);
        
        const totalMin1 = hour1 * 60 + min1;
        const totalMin2 = hour2 * 60 + min2;
        
        const op = Math.random() < 0.5 ? '+' : '-';
        let resultMin;
        
        if (op === '+') {
            resultMin = totalMin1 + totalMin2;
        } else {
            resultMin = totalMin1 - totalMin2;
            if (resultMin < 0) resultMin = totalMin1 + totalMin2; // 防止负数
        }
        
        const resultHour = Math.floor(resultMin / 60);
        const resultMinRemainder = resultMin % 60;
        
        const time1Str = min1 > 0 ? `${hour1}小时${min1}分` : `${hour1}小时`;
        const time2Str = min2 > 0 ? `${hour2}小时${min2}分` : `${hour2}小时`;
        const answerStr = resultMinRemainder > 0 ? 
            `${resultHour}小时${resultMinRemainder}分` : `${resultHour}小时`;
        
        return {
            question: `${time1Str} ${op} ${time2Str} = ?`,
            answer: answerStr,
            numericAnswer: resultMin,
            isTextAnswer: true,
            hint: '可以先都换成分来计算'
        };
    }
    
    // 辅助方法：获取所有因数
    getDivisors(num, max) {
        const divisors = [];
        for (let i = 1; i <= Math.min(num, max); i++) {
            if (num % i === 0) {
                divisors.push(i);
            }
        }
        return divisors.length > 0 ? divisors : [1];
    }
    
    // 辅助方法：数字转中文
    numberToChinese(num) {
        if (num === 0) return '零';
        
        const digits = ['零', '一', '二', '三', '四', '五', '六', '七', '八', '九'];
        const units = ['', '十', '百', '千', '万'];
        
        const str = num.toString();
        let result = '';
        let zeroFlag = false;
        
        for (let i = 0; i < str.length; i++) {
            const digit = parseInt(str[i]);
            const unit = units[str.length - i - 1];
            
            if (digit === 0) {
                zeroFlag = true;
            } else {
                if (zeroFlag) {
                    result += '零';
                }
                result += digits[digit] + unit;
                zeroFlag = false;
            }
        }
        
        return result;
    }
    
    // 重写 generate 方法以支持新题型
    generate() {
        const { type } = this.config;
        
        switch(type) {
            case 'division':
                return this.generateDivision();
            case 'division_remainder':
                return this.generateDivisionWithRemainder();
            case 'mixed_mul_div':
                return this.generateMixedMulDiv();
            case 'mixed_all':
                return this.generateMixedAll();
            case 'number_recognition':
                return this.generateNumberRecognition();
            case 'time':
                return this.generateTime();
            default:
                // 调用父类方法处理加减乘法
                return super.generate();
        }
    }
}

// 导出数据
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { mathSemester2, MathQuestionGeneratorS2 };
}
