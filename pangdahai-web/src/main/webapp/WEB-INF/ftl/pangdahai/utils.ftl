<#ftl strip_whitespace=true>

<#--
    用于包装一段显示的文本，防止XSS注入攻击
    如：<@escapeHtml>
            ${user.name!""}
            ${user.note!""}
        </@escapeHtml>
-->
<#macro escapeHtml>
    <#escape x as x?html>
        <#nested>
    </#escape>
</#macro>