/*
 * Copyright (C) 2011 ArtiVisi Intermedia <info@artivisi.com>
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *         http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
angular.module('belajar.controller',['belajar.service'])
    .controller('AboutController', ['$scope', function($scope){
        $scope.appName = "Aplikasi Belajar";
        $scope.appVersion = "Versi 1.0.0";
    }])
    .controller('ApplicationConfigController', ['$scope', 'ApplicationConfigService', function($scope, ApplicationConfigService){
        $scope.configs = ApplicationConfigService.query();
        $scope.edit = function(x){
            if(x.id == null){
                return;
            }
            $scope.currentConfig = ApplicationConfigService.get({configId: x.id});
        };
        $scope.baru = function(){
            $scope.currentConfig = null;
        }
    }]);