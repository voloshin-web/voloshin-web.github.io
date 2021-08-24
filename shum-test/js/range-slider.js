'use strict'

window.addEventListener('DOMContentLoaded', () => {
    const rangeSliderSubscr = document.querySelector('#range-slider__subscribes');
    const rangeSliderAudience = document.querySelector('#range-slider__audience');
    const rangeSliderAge = document.querySelector('#range-slider__age');
    const rangeSliderStories = document.querySelector('#range-slider__stories');
    const rangeSliderPost = document.querySelector('#range-slider__post');
    const rangeSliderPrice = document.querySelector('#range-slider__price');
    const rangeSliderCpm = document.querySelector('#range-slider__cpm');
    const rangeSliderReach = document.querySelector('#range-slider__reach');
    const rangeSliderAverage = document.querySelector('#range-slider__average');
    const rangeSliderAverageStories = document.querySelector('#range-slider__average-stories');

    



    initSlider(rangeSliderSubscr, 0, 1000000, '#input-0', '#input-1');
    initSlider(rangeSliderAudience, 0, 100, '#input-2', '#input-3');
    initSlider(rangeSliderAge, 0, 100, '#input-4', '#input-5');
    initSlider(rangeSliderStories, 0, 1000000, '#input-6', '#input-7');
    initSlider(rangeSliderPost, 0, 100, '#input-8', '#input-9');

    initSlider(rangeSliderPrice, 0, 100000, '#input-0', '#input-1');
    initSlider(rangeSliderCpm, 0, 100, '#input-2', '#input-3');
    initSlider(rangeSliderReach, 0, 100000, '#input-4', '#input-5');
    initSlider(rangeSliderAverage, 0, 100000, '#input-6', '#input-7');
    initSlider(rangeSliderAverageStories, 0, 100000, '#input-8', '#input-9');


    function initSlider(sliderName, minCount, maxCount, inputSelector0, inputSelector1) {
        if(sliderName) {
            noUiSlider.create(sliderName, {
                start: [minCount, maxCount],
                connect: true,
                step: 1,
                range: {
                    'min': [minCount],
                    'max': [maxCount]
                },
            });
    
            const input0 = document.querySelector(inputSelector0);
            const input1 = document.querySelector(inputSelector1);
            const inputs = [input0, input1];
    
            sliderName.noUiSlider.on('update', function(values, handle) {
                inputs[handle].value = Math.round(values[handle]);
            });
    
    
            const setRangeSlider = (i, value) => {
                let arr = [null, null];
                arr[i] = value;
    
                sliderName.noUiSlider.set(arr);

                // arr.forEach(item => {
                //     if (+item > 8000) {
                //         rangeSlider.noUiSlider.set(arr);
                //     }
                // })
    
            };
    
            inputs.forEach((el, index) => {
                el.addEventListener('change', (e) => {
                    setRangeSlider(index, e.currentTarget.value);
                });
            });
        }
      
    }
});